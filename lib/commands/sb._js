/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var util = require('util');
var azure = require('azure');

var utils = require('../util/utils');
var interaction = require('../util/interaction');

var namespaceNameIsValid = azure.Validate.namespaceNameIsValid;

exports.init = function (cli) {
  var log = cli.output;

  var sb = cli.category('sb')
    .description('Commands to manage your Service Bus configuration');

  var sbnamespace = sb.category('namespace')
    .description('Commands to manage your Service Bus namespaces');

  sbnamespace.command('list')
    .description('List currently defined service bus namespaces')
    .option('-s, --subscription <id>', 'use the subscription id')
    .execute(function (options, _) {
      var service = createService(options.subscription);
      var progress = cli.progress('Enumerating namespaces');
      var namespaces = service.listNamespaces(_);
      progress.end();

      interaction.formatOutput(cli, namespaces, function(outputData) {
        if(outputData.length === 0) {
          log.info('No namespaces defined');
        } else {
          log.table(outputData, function (row, ns) {
            row.cell('Name', ns.Name);
            row.cell('Region', ns.Region);
            row.cell('Status', ns.Status);
          });
        }
      });
    });

  sbnamespace.command('show [name]')
    .description('Get detailed information about a single service bus namespace')
    .option('-s, --subscription <id>', 'use the subscription id')
    .execute(function (name, options, _) {
      name = interaction.promptIfNotGiven(cli, 'Service Bus namespace: ', name, _);
      namespaceNameIsValid(name, _);
      var service = createService(options.subscription);
      var progress = cli.progress('Getting namespace');
      var namespace = service.getNamespace(name, _);
      progress.end();

      interaction.formatOutput(cli, namespace, function(outputData) {
        Object.keys(outputData).forEach(function (key) {
          if (key !== '_') {
            log.data(util.format('%s: %s', key, outputData[key]));
          }
        });
      });
    });

  sbnamespace.command('check <name>')
    .description('Check that a service bus namespace is legal and available')
    .usage('[options] <name>')
    .option('-s, --subscription <id>', 'use the subscription id')
    .execute(function (name, options, _) {
      namespaceNameIsValid(name, _);
      var service = createService(options.subscription);
      var progress = cli.progress('checking namespace ' + name);
      var result = service.verifyNamespace(name, _);
      progress.end();

      interaction.formatOutput(cli, { available: result }, function(outputData) {
        if (outputData) {
          log.data('Namespace ' + name + ' is available');
        } else {
          log.data('Namespace ' + name + ' is not available');
        }
      });
    });

  sbnamespace.command('create [namespace] [region]')
    .description('Create a new service bus namespace')
    .usage('[options] <namespace> <region>')
    .option('-n, --namespace <namespace>', 'name of namespace to create')
    .option('-r, --region <region>', 'Service Bus region to create namespace in')
    .option('-s, --subscription <id>', 'use the subscription id')
    .execute(function (namespaceName, region, options, _) {
      var service = createService(options.subscription);

      var params = utils.normalizeParameters({
        namespace: [namespaceName, options.namespace],
        region: [region, options.region]
      });

      if (params.err) { throw params.err; }

      namespaceName = interaction.promptIfNotGiven(cli, 'Namespace name: ', params.values.namespace, _);
      region = interaction.chooseIfNotGiven(cli, 'Region: ', 'Getting regions', params.values.region,
          function (cb) {
            service.getRegions(function (err, regions) {
              if (err) { return cb(err); }
              cb(null, regions.map(function (region) { return region.Code; }));
            });
          }, _);
      var progress = cli.progress('creating namespace ' + namespaceName + ' in region ' + region);
      var createdNamespace = service.createNamespace(namespaceName, region, _);
      progress.end();

      interaction.formatOutput(cli, createdNamespace, function(outputData) {
        Object.keys(outputData).forEach(function (key) {
          log.data(util.format('%s: %s', key, outputData[key]));
        });
      });
    });

  sbnamespace.command('delete [namespace]')
    .description('Delete a service bus namespace')
    .option('-n, --namespace <namespace>', 'namespace to delete')
    .option('-q, --quiet', 'quiet mode, do not ask for delete confirmation')
    .option('-s, --subscription <id>', 'use the subscription id')
    .execute(function (namespace, options, _) {
      var params = utils.normalizeParameters({
        namespace: [namespace, options.namespace]
      });

      if (params.err) { throw params.err; }

      namespace = interaction.promptIfNotGiven(cli, 'Namespace name: ', params.values.namespace, _);

      if (!options.quiet && !interaction.confirm(cli, util.format('Delete %s namespace?  (y/n) ', namespace), _)) {
        return;
      }

      var service = createService(options.subscription);

      var progress = cli.progress('Deleting namespace ' + namespace);
      try {
        service.deleteNamespace(namespace, _);
      } finally {
        progress.end();
      }
    });

  var location = sbnamespace.category('location')
    .description('Commands to manage your Service Bus locations');

  location.list = location.command('list')
    .description('Show list of available service bus locations')
    .option('-s, --subscription <id>', 'use the subscription id')
    .execute(function (options, _) {
      var service = createService(options.subscription);
      var progress = cli.progress('Getting locations');
      var regions = service.getRegions(_);
      progress.end();

      interaction.formatOutput(cli, regions, function(outputData) {
        log.table(outputData, function (row, region) {
          row.cell('Name', region.FullName);
          row.cell('Code', region.Code);
        });
      });
    });

  function createService(subscription) {
    var account = cli.category('account');
    var subscriptionId = account.lookupSubscriptionId(subscription);
    return utils.createServiceBusManagementService(subscriptionId, account, log);
  }
};