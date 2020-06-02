//import { TNSPlayer } from 'nativescript-sound';

export default function EmailValidation(atSign) {

	//The following evaluateTargetPath will retrieve the current value of the email control
	if ((atSign.evaluateTargetPath('#Page:CustomerEditPage/#Control:FCEmail/#Value').indexOf('@')) === -1) {

		//If email value does not contain @ display a validation failure message to the end-user

		//Not 2584129: How to add custom beep sound to Fiori Client/Kapsel application
		//var url = "http://soundbible.com/mp3/Bleep-SoundBible.com-1927126940.mp3";
		//var audio = new Audio(url);
		//audio.play();

		//var sound = require("nativescript-sound");
		//var tada = sound.create("~/sounds/tata.mp3"); // preload the audio file
		// play the sound (i.e. tap event handler)
		//tada.play();

		//	var dialogs = require("tns-core-modules/ui/dialogs");
		//	dialogs.confirm("Your message").then(function (result) {
		//		console.log("Dialog result: " + result);
		//	});

		var fieldValue = atSign.evaluateTargetPath('#Page:CustomerEditPage/#Control:FCEmail/#Value');
		var element = atSign.evaluateTargetPath('#Page:CustomerEditPage/#Control:FCEmail');
		if (fieldValue == 'X') {
			//element.setEditable(false);
			element.setStyle(".objectInputFaild");
			element.redraw();
		}

		atSign.executeAction('/RobSampleApp1/Actions/ValidationFailure.action');
	} else {

		//If @ is present in the email value, return true to indicate validation is successful
		return true;
	}
}