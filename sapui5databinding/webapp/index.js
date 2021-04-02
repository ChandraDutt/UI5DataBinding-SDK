sap.ui.require([
	"sap/m/Text",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/BindingMode",
	"sap/ui/model/resource/ResourceModel"
], function (Text,JSONModel, XMLView, BindingMode, ResourceModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		// Create a JSON model from an object literal
		// var oModel = new JSONModel({
		// 	greetingText: "Hi, my name is Harry Hawk"
		// });

		//JSON Model for Step3- Two way Data Binding
		var oModel = new JSONModel({
			firstName: "Harry",
			lastName: "Hawk",
			enabled: true,
			panelHeaderText: "Data Binding Basics"

		});
		oModel.setDefaultBindingMode(BindingMode.OneWay);

		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);
		// Create a text UI element that displays a hardcoded text string
		//new Text({text: "Hi, my name is Harry Hawk"}).placeAt("content");

		// Display a text element whose text is derived
		// from the model object

		//new Text({text: "{/greetingText}"}).placeAt("content");

		// Create a resource bundle for language specific texts
		// the configured supportedLocales represent the i18n files present:
		// * "" - i18n/i18n.properties
		// the configured fallbackLocale should represent one of these files
		// * "" - according to the fallback chain the root bundle is the last fallback.
		//   Configuring it explicitly avoids side effects when additional resource files are added.
		// @see https://sapui5.hana.ondemand.com/#/topic/ec753bc539d748f689e3ac814e129563
		var oResourceModel = new ResourceModel({
			bundleName: "sap.ui.demo.db.i18n.i18n",
			supportedLocales: ["", "de"],
			fallbackLocale: ""
		});

		// Assign the model object to the SAPUI5 core using the name "i18n"
		sap.ui.getCore().setModel(oResourceModel, "i18n");

		// Display the XML view called "App"
		new XMLView({
			viewName: "sap.ui.demo.db.view.App"
		}).placeAt("content");
	});
});