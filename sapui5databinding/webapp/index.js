sap.ui.require([
	"sap/m/Text",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/BindingMode"
], function (Text,JSONModel, XMLView, BindingMode) {
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

		// Display the XML view called "App"
		new XMLView({
			viewName: "sap.ui.demo.db.view.App"
		}).placeAt("content");
	});
});