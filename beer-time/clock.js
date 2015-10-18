function setDifference(hour, minutes) {
	var targetTime = new Date();
	targetTime.setHours(hour);
	targetTime.setMinutes(minutes);
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

function printEnd() {
	document.getElementById("clock").innerHTML = "BEER TIME!!!!";
}

var userHour, userMinutes;

function createTime () {
	var differenceMiliseconds = setDifference(userHour, userMinutes);
	if (differenceMiliseconds < 0) {
		printEnd();
	} else {
		var parsedDifference = parseMiliseconds(differenceMiliseconds);
		var stringTime = convertTime(parsedDifference);
		printTime(stringTime)
	}
}

function getTime () {
	var userTime = prompt('What time is Beer Time??!! [hour, minutes]').split(' ');
	userHour = userTime[0];
	userMinutes = userTime[1];
}

getTime();
window.setInterval(createTime, 1000);
