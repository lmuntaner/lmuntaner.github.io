function setDifference(hour) {
	var targetTime = new Date();
	targetTime.setHours(hour);
	targetTime.setMinutes(0);
	targetTime.setSeconds(0);

	var currentTime = new Date();

	return targetTime - currentTime;
}


function parseMiliseconds(differenceMiliseconds) {
	var hours = parseInt(differenceMiliseconds / 1000 / 3600);
	var hoursMiliseconds = hours * 3600000;
	var minutes = parseInt((differenceMiliseconds - hoursMiliseconds) / 60000);
	var minutesMiliseconds = minutes * 60000;
	var seconds = parseInt((differenceMiliseconds - (hoursMiliseconds + minutesMiliseconds)) / 1000);
	return [hours, minutes, seconds];
}


function convertTime(parsedArray) {
	var hours = parsedArray[0];
	var minutes = parsedArray[1] > 9 ? parsedArray[1] : "0" + parsedArray[1];
	var seconds = parsedArray[2] > 9 ? parsedArray[2] : "0" + parsedArray[2];
	return hours + ":" + minutes + ":" + seconds;
}


function printTime(stringTime) {
	document.getElementById("clock").innerHTML = stringTime;
}

function createTime () {
	var differenceMiliseconds = setDifference(23);
	var parsedDifference = parseMiliseconds(differenceMiliseconds);
	var stringTime = convertTime(parsedDifference);
	printTime(stringTime)	
}

window.setInterval(createTime, 1000);



