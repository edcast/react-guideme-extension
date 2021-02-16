// if (GmXt === undefined) {
// 	var GmXt = {};
// }

// GmXt.conf = {};

// GmXt.conf.brandName = "edcast";
// GmXt.conf.version = "2021.01.30.1";
// GmXt.conf.env = "Stage";

// GmXt.conf.creatorApp = 'mgExt';
// GmXt.conf.autoApp = 'mgExtAt';
// GmXt.conf.playerApp = 'mgPlayer';
// GmXt.conf.creatorJS = 'mgCreator';
// GmXt.conf.appName = "mgExt";

// GmXt.conf.allowedDomains = [];
// GmXt.conf.autologin = false;
// GmXt.conf.appTypeExt = 'Extension';
// GmXt.conf.appTypeScript = 'JScript';
// GmXt.conf.appTypeElectron = 'electron';
// GmXt.conf.Box = 'Box';
// GmXt.conf.Premise = 'Premise';
// GmXt.conf.premSupport = parseInt('0');
// GmXt.conf.runEnv = "browser";
// GmXt.conf.msgPrefix = "";

// GmXt.conf.showWidget = false;

// GmXt.conf.dap = "" ? "" : "MyGuide";

// GmXt.conf.playerExtension = GmXt.conf.playerApp + GmXt.conf.appTypeExt;
// GmXt.conf.playerJS = GmXt.conf.playerApp + GmXt.conf.appTypeScript;

// GmXt.conf.websiteUrl = "" ? "" : "https://myguide.org";
// GmXt.conf.privacyPolicyUrl = "" ? "" : "https://www.edcast.com/corp/privacy-policy/";
// GmXt.conf.termsURL = "" ? "" : "https://www.edcast.com/corp/terms-of-service/";
// GmXt.conf.feedbackDetails = "" ? "" : "mailto:support@edcast.com?Subject=MyGuide Feedback";
// GmXt.conf.brandName = "" ? "" : "MyGuide by Edcast";
// GmXt.conf.supportEmail = "" ? "" : "support@edcast.com";

// try {
// 	chrome.runtime.onMessage.addListener(function() {});
// 	GmXt.conf.appType = GmXt.conf.appTypeExt;
// } catch (e) {
// 	try {
// 		var uri = safari.extension.baseURI;
// 		if (uri !== null) {
// 			GmXt.conf.appType = GmXt.conf.appTypeExt;
// 		}
// 	} catch (e2) {
// 		GmXt.conf.appType = GmXt.conf.appTypeScript;
// 	}
// }

// // Default true, guideme icon will be visible on all urls. 
// // If false, guideme icon will only be visible on urls where user have created tours. 

// GmXt.conf.allUrls = true;

// GmXt.conf.provider = "GuideMe";

// GmXt.conf.storageUrl = "";

// GmXt.setOnPremise = function() {

// 	function apply(p) {
// 		if (p.appKey) GmXt.conf.appKey = p.appKey;
// 		if (p.apiUrl) GmXt.conf.webServiceUrl = p.apiUrl;
// 		if (p.analyticsUrl) GmXt.conf.analyticsPath = p.analyticsUrl;
// 		if (p.cdnUrl) GmXt.conf.staticContentPath = p.cdnUrl;
// 		if (p.webPortal) GmXt.conf.webPortalUrl = p.webPortal;
// 		if (p.analyticsPortal) GmXt.conf.analyticsPortalUrl = p.analyticsPortal;
// 		if (p.smbLookUp) GmXt.conf.smbLookUpUrl = p.smbLookUp;
// 		if (p.assetPath) GmXt.conf.staticContentPath = p.assetPath;
// 	}

// 	if (GmXt.conf.appName === GmXt.conf.creatorApp) {

// 		if (GmXt.onPremise) {
// 			apply(GmXt.onPremise);
// 		} else {
// 			chrome.storage.sync.get({
// 				onPrem_appKey: '',
// 				onPrem_apiUrl: '',
// 				onPrem_insightsUrl: '',
// 				onPrem_cdnUrl: '',
// 				onPrem_adminPortal: '',
// 				onPrem_insightsPortal: '',
// 				onPrem_smbLookUpUrl: '',
// 				onPrem_assetPath: ''
// 			}, function(items) {
// 				var prem = {
// 					appKey: items.onPrem_appKey,
// 					apiUrl: items.onPrem_apiUrl,
// 					analyticsUrl: items.onPrem_insightsUrl,
// 					cdnUrl: items.onPrem_cdnUrl,
// 					webPortal: items.onPrem_adminPortal,
// 					analyticsPortal: items.onPrem_insightsPortal,
// 					smbLookUp: items.onPrem_smbLookUpUrl,
// 					assetPath: items.onPrem_assetPath
// 				};
// 				apply(prem);
// 			});
// 		}
// 	}
// };

// GmXt.setConfig = function() {
// 	GmXt.conf.appKey = "TESTAUTHKEY";
// 	GmXt.conf.orgSecret = "";
// 	GmXt.conf.clientJsBaseUrl = "//stagecdn.guideme.io/guideme-player/v3/";

// 	GmXt.conf.webServiceUrl = "https://api-v3-stage.guideme.io/v3/";
// 	GmXt.conf.staticContentPath = "https://stagecdn.guideme.io/guideme-assests/";
// 	GmXt.conf.webPortalUrl = "https://stage-admin.myguide.org/";
// 	GmXt.conf.analyticsPath = "https://analytics-stage.guideme.io/";
// 	GmXt.conf.analyticsPortalUrl = "http://stageanalytics.guideme.io/v3/";
// 	GmXt.conf.errorService = "https://stage-reporting.guideme.io/";

// 	GmXt.conf.lmsApiUrl = "https://salesuapistage.azurewebsites.net/";
// 	GmXt.conf.cdnStorage = "https://stagecdn.guideme.io/";

// 	GmXt.conf.ssoRedirectionUrl = "https://stagesso.guideme.io/saml2/sp/sso/";
// 	GmXt.conf.ssoApiUrl = "https://stagesso.guideme.io/saml2/sp/session/";
// 	GmXt.conf.ssoConfigUrl = "https://stagecdn.guideme.io/guideme-auth-stage/objects/";

// 	GmXt.conf.paymentEndPoint = "";
// 	GmXt.conf.edcastCartApiUrl = "https://sociative.edcast.io";
// 	GmXt.conf.fileStackSecret = "SUU4X54E2RC3ZIEA5FXT2UXBF4";
// 	GmXt.conf.smbLookUpUrl = "https://api-stage-smb.myguide.org/v3/";

// 	GmXt.conf.lxpTeamDomain = "";

// 	GmXt.setOnPremise();
// };

// GmXt.setConfig();

// GmXt.setHpeConfig = function() {
// 	GmXt.conf.clientJsBaseUrl = "";
// 	GmXt.conf.appKey = "";
// 	GmXt.conf.orgSecret = "";
// 	GmXt.conf.webServiceUrl = "";
// 	GmXt.conf.staticContentPath = "";
// 	GmXt.conf.analyticsPath = "";
// 	GmXt.conf.webPortalUrl = "";
// 	GmXt.conf.analyticsPortalUrl = "";
// };

// GmXt.setSMBLogin = function() {
// 	GmXt.conf.SMBUser = true;
// 	GmXt.conf.webServiceUrl = "https://api-stage-smb.myguide.org/v3/";
// };

// GmXt.setRegionConf = function(region) {
// 	GmXt.log(21, 'REGION: ' + region);
// 	switch (region) {
// 		case "US_HPE":
// 			GmXt.setHpeConfig();
// 			break;
// 		case "SMB":
// 		case "freemium":
// 			GmXt.setSMBLogin();
// 			break;
// 		default:
// 			GmXt.setConfig();
// 	}
// };

// (function() {
// 	if (GmXt.conf.appType === GmXt.conf.appTypeExt) {

// 		var root = '';
// 		if (GmXt.browserApp === 'Safari') {
// 			root = safari.extension.baseURI;
// 		} else {
// 			root = chrome.extension.getURL('');
// 		}

// 		if (GmXt.conf.staticContentPath === "data/assets/") {
// 			GmXt.conf.staticContentPath = root + GmXt.conf.staticContentPath;
// 		}

// 		if (GmXt.conf.provider === GmXt.conf.Box) {
// 			GmXt.conf.webServiceUrl = root + GmXt.conf.webServiceUrl;
// 			GmXt.conf.lmsApiUrl = root + GmXt.conf.lmsApiUrl;
// 			GmXt.conf.storageUrl = root + GmXt.conf.storageUrl;
// 		}
// 	}
// })();

// GmXt.conf.appConfig = {
// 	login: { guideme: 1, edcast: 1, edToken:1, google: 1, signUp: 0, forgotPass: 1 },
// 	requireLogin: true,
// 	tourViewOptions: { showMe:1, testme:1, audio:1 },
// 	defaultIcon: 'myguide.png',
// 	isLXP: false,
// 	customer: 'myguide'
// };

export const GmXt = {
    
}