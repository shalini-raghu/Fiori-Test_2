/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"com/mycompany/northwind/Fiori_Northwind/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});