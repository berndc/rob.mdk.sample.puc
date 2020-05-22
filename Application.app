{
	"_Name": "RobSampleApp1",
	"Version": "/RobSampleApp1/Globals/AppDefinition_Version.global",
	"MainPage": "/RobSampleApp1/Pages/Main.page",
	"OnLaunch": [
		"/RobSampleApp1/Actions/Service/InitializeOffline.action"
	],
	"OnWillUpdate": "/RobSampleApp1/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/RobSampleApp1/Actions/Service/InitializeOffline.action",
	"Styles": "/RobSampleApp1/Styles/Styles.less",
	"Localization": "/RobSampleApp1/i18n/i18n.properties"
}