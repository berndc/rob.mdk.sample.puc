export default function checkInputLali(ClientAPI) {

	console.debug("---> Rules: Name ValidITON - 1")

	var element_lali = ClientAPI.evaluateTargetPath('#Page:FormLali/#Control:FC_Lali');
	var element_del = ClientAPI.evaluateTargetPath('#Page:FormLali/#Control:FC_Delivery');

	//The following evaluateTargetPath will retrieve the current value of the email control
	if (ClientAPI.evaluateTargetPath('#Page:FormLali/#Control:FC_Delivery/#Value')) {

		var fieldValue = ClientAPI.evaluateTargetPath('#Page:FormLali/#Control:FC_Delivery/#Value');

		//element.setEditable(false);
		console.debug(">>> try Element");

		ClientAPI.setStyle("objectInput", "");
		element_del.setStyle("objectInput", "");

		element_lali.setValue("88997788998");

		element_del.redraw();
		element_lali.redraw();

		console.debug(">>> try getControl");

		//var control = ClientAPI.getControl()
		//control.setStyle("background-color: #720000");
		//control.setValue("Bitte hier Wert eingeben!!");

		console.log(">fieldValue" + fieldValue);

		//let srcValue = ClientAPI.getValue();

		console.log(">>> exeAction");
		//ClientAPI.executeAction('/MDKSample1/Actions/checkInputMessageAction.action');
		ClientAPI.executeAction('/RobSampleApp1/Actions/Message/infoMessageActionDone.action');
		//}

	} else {

		//if (fieldValue == 'X') {
		//element.setEditable(false);
		console.debug(">>> try Element in Else");

		element_del.setStyle("objectInputFaild", "");
		element_lali.setValue("");

		//element.setValue("Versuch mal X!");
		ClientAPI.setStyle("objectInputFaild", "");

		element_del.redraw();
		element_lali.redraw();
		/*var control = ClientAPI.getControl();
		control.setStyle("objectInput");
		control.setValue("Bitte mal ein X eingeben!!");
		ClientAPI.setStyle("objectInputFaild", "");

		control.redraw();
		//If @ is present in the email value, return true to indicate validation is successful
		//return true;
		*/
		ClientAPI.executeAction('/RobSampleApp1/Actions/Message/validationErrorMessage.action');
	}

}