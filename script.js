var beginTime = 0;
var endTime = 0;
var doingQuestion = false;
var question = 1;
var totalTime = 0;



function recordTime() {
	if (!doingQuestion) {
		var today = new Date();
		beginTime = 3600*today.getHours()+60*today.getMinutes()+today.getSeconds();
		doingQuestion = true;
	}
	if (question == 11) {
		alert("There are no more problems left in the EHR Form!");
	}
	else {
		alert("You need to submit your answer to question " + question + " first!");
	}
}

function recordTime2() {
	// end clock
	if (doingQuestion) {
		var end = new Date();
		endTime = 3600*end.getHours()+60*end.getMinutes()+end.getSeconds();
		var timeTaken = endTime - beginTime;
	
		// update chart
		var id = "q"+question;
		document.getElementById(id).innerHTML = "Q"+question+": " + timeTaken + " seconds.";
	
		// jump to next question.
		question++;
		doingQuestion = false;
		totalTime += timeTaken;
		
	}
	else if (question == 11) {
		alert("There are no more problems left in the EHR Form!");
	}
	else {
		alert("You need to start the timer for question " + question + " first!");
	}
	
	
}

function e1emTimer() {
	var today = new Date();
	if (!doingQuestion && question == 1) {
    	document.getElementById('header').innerHTML = "Welcome to the Timed EHR Form! Here are 10 questions that you will have to answer regarding a patient. To begin, press the 'Start Timer' button. Once you are finished, press the 'End Timer' button."
    	document.getElementById('header2').innerHTML = "You have yet to begin. You will attempt Question 1.";
    }
    else if (doingQuestion) {
    	var current = new Date();
		currentTime = 3600*current.getHours()+60*current.getMinutes()+current.getSeconds();
		var timeElapsed = currentTime - beginTime;
		document.getElementById('header2').innerHTML = "You are on Question " + question + ".";
		document.getElementById('header').innerHTML = "";
		document.getElementById('timer').innerHTML = "TIME ELAPSED: " + timeElapsed + " seconds.";
    }
    else if (!doingQuestion && question <= 10) {
    	var finished = question - 1;
    	document.getElementById('header').innerHTML = "Question " + finished + " completed.";
    	document.getElementById('header2').innerHTML = "You may now attempt Question " + question + ".";
    	document.getElementById('timer').innerHTML = "";
    }
    else {
    	document.getElementById('header').innerHTML = "Thank you for participating!";
    	document.getElementById('header2').innerHTML = "The total time taken was: " + totalTime + " seconds.";
    	document.getElementById('timer').innerHTML = "See you soon!";
    }
    
}
var countdownTimer = setInterval('e1emTimer()', 10);
window.onload = e1emTimer;
