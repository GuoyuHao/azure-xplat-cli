// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '38b598fc-e57a-423f-b2e7-dc0ddb631f1f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://gallery.azure.com:443')
  .get('/Microsoft.Gallery/galleryitems/Microsoft.ASPNETStarterSite.0.2.2-preview')
  .reply(200, "{\"identity\":\"Microsoft.ASPNETStarterSite.0.2.2-preview\",\"publisher\":\"Microsoft\",\"publisherDisplayName\":\"Microsoft\",\"itemName\":\"ASPNETStarterSite\",\"itemDisplayName\":\"ASP.NET Starter Site\",\"version\":\"0.2.2-preview\",\"summary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"longSummary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"description\":\"<p>Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website.</p>\",\"resourceGroupName\":null,\"definitionTemplates\":{\"uiDefinitionFileUrl\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/UIDefinition.json\",\"defaultDeploymentTemplateId\":\"website_NewHostingPlan-Default\",\"deploymentTemplateFileUrls\":{\"website_ExistingHostingPlan\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_ExistingHostingPlan.json\",\"website_NewHostingPlan\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan.json\",\"website_NewHostingPlan-Default\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan-Default.json\",\"website_NewHostingPlan_BasicStandard\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan_BasicStandard.json\"}},\"categoryIds\":[\"web\",\"starterSite\"],\"screenshotUrls\":[],\"links\":[{\"id\":\"0\",\"displayName\":\"About Microsoft\",\"uri\":\"http://www.microsoft.com/\"},{\"id\":\"1\",\"displayName\":\"Documentation\",\"uri\":\"http://www.microsoft.com/web/category/all\"}],\"iconFileUrls\":{\"small\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Small.png\",\"medium\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Medium.png\",\"large\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Large.png\",\"wide\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Wide.png\",\"hero\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-content-type-options': 'nosniff',
  'x-xss-protection': '1; mode=block',
  'x-ms-version': '4.14.0.133 (a2a340b.150108-1230)',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'browserId=5df32d7bef1145c68ad3ee2e842b0b55; domain=gallery.azure.com; path=/; secure; HttpOnly' ],
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 12 Aug 2015 19:53:06 GMT',
  'content-length': '2773' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup8529/deployments/?$top=1&api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8529/deployments/Deploy16684\",\"name\":\"Deploy16684\",\"properties\":{\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite14522\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost29157\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"West US\"},\"sku\":{\"type\":\"String\",\"value\":\"Free\"},\"workerSize\":{\"type\":\"String\",\"value\":\"0\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Running\",\"timestamp\":\"2015-08-12T19:52:45.1404192Z\",\"duration\":\"PT5.3393084S\",\"correlationId\":\"cd2a56ab-a4ca-473b-a2a7-88ffacfb4d9c\",\"providers\":[{\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"serverfarms\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites/Extensions\",\"locations\":[null]}]},{\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"autoscalesettings\",\"locations\":[\"eastus\"]},{\"resourceType\":\"alertrules\",\"locations\":[\"eastus\"]},{\"resourceType\":\"components\",\"locations\":[\"centralus\"]}]}],\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8529/providers/Microsoft.Web/serverfarms/xDeploymentTestHost29157\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost29157\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8529/providers/Microsoft.Web/sites/xDeploymentTestSite14522\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite14522\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8529/providers/Microsoft.Web/Sites/xDeploymentTestSite14522\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite14522\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8529/providers/Microsoft.Web/sites/xDeploymentTestSite14522/Extensions/MSDeploy\",\"resourceType\":\"Microsoft.Web/sites/Extensions\",\"resourceName\":\"xDeploymentTestSite14522/MSDeploy\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8529/providers/Microsoft.Web/serverfarms/xDeploymentTestHost29157\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost29157\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8529/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost29157-xDeploymentTestGroup8529\",\"resourceType\":\"microsoft.insights/autoscalesettings\",\"resourceName\":\"xDeploymentTestHost29157-xDeploymentTestGroup8529\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8529/providers/Microsoft.Web/sites/xDeploymentTestSite14522\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite14522\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8529/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite14522\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ServerErrors xDeploymentTestSite14522\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8529/providers/Microsoft.Web/sites/xDeploymentTestSite14522\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite14522\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8529/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite14522\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ForbiddenRequests xDeploymentTestSite14522\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8529/providers/Microsoft.Web/serverfarms/xDeploymentTestHost29157\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost29157\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8529/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost29157\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"CPUHigh xDeploymentTestHost29157\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8529/providers/Microsoft.Web/serverfarms/xDeploymentTestHost29157\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost29157\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8529/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost29157\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"LongHttpQueue xDeploymentTestHost29157\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8529/providers/Microsoft.Web/sites/xDeploymentTestSite14522\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite14522\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8529/providers/microsoft.insights/components/xDeploymentTestSite14522\",\"resourceType\":\"microsoft.insights/components\",\"resourceName\":\"xDeploymentTestSite14522\"}]}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '921d656c-493f-4d1c-809d-f6b8edbeda95',
  'x-ms-correlation-request-id': '921d656c-493f-4d1c-809d-f6b8edbeda95',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20150812T195308Z:921d656c-493f-4d1c-809d-f6b8edbeda95',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 12 Aug 2015 19:53:08 GMT',
  'content-length': '5338' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringPath(function (path) { return path.slice(0, path.indexOf('&')); })
.get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/providers/microsoft.insights/eventtypes/management/values?api-version=2014-04-01')
  .reply(200, "{\"value\":[{\"authorization\":{\"action\":\"Microsoft.Web/serverfarms/write\",\"role\":\"Subscription Admin\",\"scope\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup8529/providers/Microsoft.Web/serverfarms/xDeploymentTestHost29157\"},\"caller\":\"visriniv@microsoft.com\",\"channels\":\"Operation\",\"claims\":{\"aud\":\"https://management.core.windows.net/\",\"iss\":\"https://sts.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47/\",\"iat\":\"1439408497\",\"nbf\":\"1439408497\",\"exp\":\"1439412397\",\"ver\":\"1.0\",\"http://schemas.microsoft.com/identity/claims/tenantid\":\"72f988bf-86f1-41af-91ab-2d7cd011db47\",\"http://schemas.microsoft.com/identity/claims/objectidentifier\":\"59f2d211-82ad-46e9-a96c-d0b544bddc7f\",\"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn\":\"visriniv@microsoft.com\",\"puid\":\"1003BFFD87E96A20\",\"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier\":\"pbtqd_P5pOZh9rhxsa848u2oeefHvmttVHMvA_0lmuw\",\"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname\":\"Vivek\",\"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname\":\"Srinivasan\",\"name\":\"Vivek Srinivasan\",\"http://schemas.microsoft.com/claims/authnmethodsreferences\":\"pwd\",\"_claim_names\":\"{\\\"groups\\\":\\\"src1\\\"}\",\"_claim_sources\":\"{\\\"src1\\\":{\\\"endpoint\\\":\\\"https://graph.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47/users/59f2d211-82ad-46e9-a96c-d0b544bddc7f/getMemberObjects\\\"}}\",\"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name\":\"visriniv@microsoft.com\",\"onprem_sid\":\"S-1-5-21-2127521184-1604012920-1887927527-13410867\",\"appid\":\"04b07795-8ddb-461a-bbee-02f9e1bf7b46\",\"appidacr\":\"0\",\"http://schemas.microsoft.com/identity/claims/scope\":\"user_impersonation\",\"http://schemas.microsoft.com/claims/authnclassreference\":\"1\"},\"correlationId\":\"cd2a56ab-a4ca-473b-a2a7-88ffacfb4d9c\",\"description\":\"\",\"eventDataId\":\"281ec651-5f90-4e35-9683-6baefe111e43\",\"eventName\":{\"value\":\"BeginRequest\",\"localizedValue\":\"Begin request\"},\"eventSource\":{\"value\":\"Administrative\",\"localizedValue\":\"Administrative\"},\"httpRequest\":{\"clientRequestId\":\"5bb233a7-d805-4c28-9d5e-b3fa35611ef1\",\"clientIpAddress\":\"131.107.192.94\",\"method\":\"PUT\"},\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup8529/providers/Microsoft.Web/serverfarms/xDeploymentTestHost29157/events/281ec651-5f90-4e35-9683-6baefe111e43/ticks/635750059670637463\",\"level\":\"Informational\",\"resourceGroupName\":\"xDeploymentTestGroup8529\",\"resourceProviderName\":{\"value\":\"Microsoft.Web\",\"localizedValue\":\"Azure Web Sites\"},\"resourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup8529/providers/Microsoft.Web/serverfarms/xDeploymentTestHost29157\",\"operationId\":\"ffafe80b-9bc9-4276-a0ea-3d936e4bd45b\",\"operationName\":{\"value\":\"Microsoft.Web/serverfarms/write\",\"localizedValue\":\"Update hosting plan\"},\"status\":{\"value\":\"Started\",\"localizedValue\":\"Started\"},\"subStatus\":{\"value\":\"\",\"localizedValue\":\"\"},\"eventTimestamp\":\"2015-08-12T19:52:47.0637463Z\",\"submissionTimestamp\":\"2015-08-12T19:53:00.4903186Z\",\"subscriptionId\":\"38b598fc-e57a-423f-b2e7-dc0ddb631f1f\"},{\"authorization\":{\"action\":\"Microsoft.Resources/subscriptions/resourcegroups/deployments/write\",\"role\":\"Subscription Admin\",\"scope\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup8529/deployments/Deploy16684\"},\"caller\":\"visriniv@microsoft.com\",\"channels\":\"Operation\",\"claims\":{\"aud\":\"https://management.core.windows.net/\",\"iss\":\"https://sts.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47/\",\"iat\":\"1439408497\",\"nbf\":\"1439408497\",\"exp\":\"1439412397\",\"ver\":\"1.0\",\"http://schemas.microsoft.com/identity/claims/tenantid\":\"72f988bf-86f1-41af-91ab-2d7cd011db47\",\"http://schemas.microsoft.com/identity/claims/objectidentifier\":\"59f2d211-82ad-46e9-a96c-d0b544bddc7f\",\"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn\":\"visriniv@microsoft.com\",\"puid\":\"1003BFFD87E96A20\",\"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier\":\"pbtqd_P5pOZh9rhxsa848u2oeefHvmttVHMvA_0lmuw\",\"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname\":\"Vivek\",\"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname\":\"Srinivasan\",\"name\":\"Vivek Srinivasan\",\"http://schemas.microsoft.com/claims/authnmethodsreferences\":\"pwd\",\"_claim_names\":\"{\\\"groups\\\":\\\"src1\\\"}\",\"_claim_sources\":\"{\\\"src1\\\":{\\\"endpoint\\\":\\\"https://graph.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47/users/59f2d211-82ad-46e9-a96c-d0b544bddc7f/getMemberObjects\\\"}}\",\"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name\":\"visriniv@microsoft.com\",\"onprem_sid\":\"S-1-5-21-2127521184-1604012920-1887927527-13410867\",\"appid\":\"04b07795-8ddb-461a-bbee-02f9e1bf7b46\",\"appidacr\":\"0\",\"http://schemas.microsoft.com/identity/claims/scope\":\"user_impersonation\",\"http://schemas.microsoft.com/claims/authnclassreference\":\"1\"},\"correlationId\":\"cd2a56ab-a4ca-473b-a2a7-88ffacfb4d9c\",\"description\":\"\",\"eventDataId\":\"8003adb5-3823-4536-b447-404b34c27f4f\",\"eventName\":{\"value\":\"EndRequest\",\"localizedValue\":\"End request\"},\"eventSource\":{\"value\":\"Administrative\",\"localizedValue\":\"Administrative\"},\"httpRequest\":{\"clientRequestId\":\"\",\"clientIpAddress\":\"131.107.192.94\",\"method\":\"PUT\"},\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup8529/deployments/Deploy16684/events/8003adb5-3823-4536-b447-404b34c27f4f/ticks/635750059606767960\",\"level\":\"Informational\",\"resourceGroupName\":\"xDeploymentTestGroup8529\",\"resourceProviderName\":{\"value\":\"Microsoft.Resources\",\"localizedValue\":\"Microsoft Resources\"},\"resourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup8529/deployments/Deploy16684\",\"operationId\":\"cd2a56ab-a4ca-473b-a2a7-88ffacfb4d9c\",\"operationName\":{\"value\":\"Microsoft.Resources/subscriptions/resourcegroups/deployments/write\",\"localizedValue\":\"Update deployment\"},\"properties\":{\"statusCode\":\"Created\",\"serviceRequestId\":null},\"status\":{\"value\":\"Succeeded\",\"localizedValue\":\"Succeeded\"},\"subStatus\":{\"value\":\"Created\",\"localizedValue\":\"Created (HTTP Status Code: 201)\"},\"eventTimestamp\":\"2015-08-12T19:52:40.676796Z\",\"submissionTimestamp\":\"2015-08-12T19:53:00.0590737Z\",\"subscriptionId\":\"38b598fc-e57a-423f-b2e7-dc0ddb631f1f\"},{\"authorization\":{\"action\":\"Microsoft.Resources/subscriptions/resourcegroups/deployments/write\",\"role\":\"Subscription Admin\",\"scope\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup8529/deployments/Deploy16684\"},\"caller\":\"visriniv@microsoft.com\",\"channels\":\"Operation\",\"claims\":{\"aud\":\"https://management.core.windows.net/\",\"iss\":\"https://sts.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47/\",\"iat\":\"1439408497\",\"nbf\":\"1439408497\",\"exp\":\"1439412397\",\"ver\":\"1.0\",\"http://schemas.microsoft.com/identity/claims/tenantid\":\"72f988bf-86f1-41af-91ab-2d7cd011db47\",\"http://schemas.microsoft.com/identity/claims/objectidentifier\":\"59f2d211-82ad-46e9-a96c-d0b544bddc7f\",\"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn\":\"visriniv@microsoft.com\",\"puid\":\"1003BFFD87E96A20\",\"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier\":\"pbtqd_P5pOZh9rhxsa848u2oeefHvmttVHMvA_0lmuw\",\"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname\":\"Vivek\",\"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname\":\"Srinivasan\",\"name\":\"Vivek Srinivasan\",\"http://schemas.microsoft.com/claims/authnmethodsreferences\":\"pwd\",\"_claim_names\":\"{\\\"groups\\\":\\\"src1\\\"}\",\"_claim_sources\":\"{\\\"src1\\\":{\\\"endpoint\\\":\\\"https://graph.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47/users/59f2d211-82ad-46e9-a96c-d0b544bddc7f/getMemberObjects\\\"}}\",\"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name\":\"visriniv@microsoft.com\",\"onprem_sid\":\"S-1-5-21-2127521184-1604012920-1887927527-13410867\",\"appid\":\"04b07795-8ddb-461a-bbee-02f9e1bf7b46\",\"appidacr\":\"0\",\"http://schemas.microsoft.com/identity/claims/scope\":\"user_impersonation\",\"http://schemas.microsoft.com/claims/authnclassreference\":\"1\"},\"correlationId\":\"cd2a56ab-a4ca-473b-a2a7-88ffacfb4d9c\",\"description\":\"\",\"eventDataId\":\"82147a23-d1a3-4bc6-ab9a-e88045add63c\",\"eventName\":{\"value\":\"BeginRequest\",\"localizedValue\":\"Begin request\"},\"eventSource\":{\"value\":\"Administrative\",\"localizedValue\":\"Administrative\"},\"httpRequest\":{\"clientRequestId\":\"\",\"clientIpAddress\":\"131.107.192.94\",\"method\":\"PUT\"},\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup8529/deployments/Deploy16684/events/82147a23-d1a3-4bc6-ab9a-e88045add63c/ticks/635750059595361858\",\"level\":\"Informational\",\"resourceGroupName\":\"xDeploymentTestGroup8529\",\"resourceProviderName\":{\"value\":\"Microsoft.Resources\",\"localizedValue\":\"Microsoft Resources\"},\"resourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup8529/deployments/Deploy16684\",\"operationId\":\"cd2a56ab-a4ca-473b-a2a7-88ffacfb4d9c\",\"operationName\":{\"value\":\"Microsoft.Resources/subscriptions/resourcegroups/deployments/write\",\"localizedValue\":\"Update deployment\"},\"status\":{\"value\":\"Started\",\"localizedValue\":\"Started\"},\"subStatus\":{\"value\":\"\",\"localizedValue\":\"\"},\"eventTimestamp\":\"2015-08-12T19:52:39.5361858Z\",\"submissionTimestamp\":\"2015-08-12T19:53:00.0590737Z\",\"subscriptionId\":\"38b598fc-e57a-423f-b2e7-dc0ddb631f1f\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '9251',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'EastUS_3c02713768244584b0941984f721c8d6_635750059885125547',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '99a0541c-c1c9-4f93-aea4-4a8b20d7e8bd',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20150812T195308Z:99a0541c-c1c9-4f93-aea4-4a8b20d7e8bd',
  date: 'Wed, 12 Aug 2015 19:53:07 GMT' });
 return result; }]];