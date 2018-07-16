sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.axyt.chapter3unit3.controller.FirstPage", {
		buttonClick: function(evt){
			var newName = this.byId("inputName").getValue();
			var nameInsert = {"Name" : newName};
			this.getView().getModel().getProperty("/People").push(nameInsert);
			this.getView().getModel().refresh();
		}
	});
});