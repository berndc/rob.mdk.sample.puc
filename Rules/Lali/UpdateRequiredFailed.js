//import CommonLibrary from '../CommonLibrary';

export default function UpdateRequiredFailed(pageProxy) {

	//first remove all previous validation
	//CommonLibrary.clearValidationForPage(pageProxy);

	//get the missing fields
	var missingRequiredFields = pageProxy.getMissingRequiredControls();
	//var message = pageProxy.localizeText('fieldIsRequired');

	//set the inline error
	for (var control of missingRequiredFields) {
		//CommonLibrary.setInlineControlError(pageProxy, control, message);
		control.setStyle("objectInputFaild", "");
	}

	//show inline error
	pageProxy.getControl('FormCellContainer').redraw();
}