export default function EmailValidation(atSign) {

	//The following evaluateTargetPath will retrieve the current value of the email control
	if ((atSign.evaluateTargetPath('#Page:CustomerEditPage/#Control:FCEmail/#Value').indexOf('@')) === -1) {

		//If email value does not contain @ display a validation failure message to the end-user
		
		//Not 2584129: How to add custom beep sound to Fiori Client/Kapsel application
		var url = "http://soundbible.com/mp3/Bleep-SoundBible.com-1927126940.mp3";
		var audio = new Audio(url);
		audio.play();

		atSign.executeAction('/RobSampleApp1/Actions/ValidationFailure.action');
	} else {

		//If @ is present in the email value, return true to indicate validation is successful
		return true;
	}
}