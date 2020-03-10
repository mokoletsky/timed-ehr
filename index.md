<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" href="http://s3.amazonaws.com/codecademy-content/courses/ltp/css/bootstrap.css">
<head>
 
<title>EHR Questions</title>
<link rel="shortcut icon" href="https://www.drupal.org/files/project-images/edit(27117).png">
</head>

<head>
    <div class="Homepage">
    <h1 align="center"> Timed EHR Form </h1>
    <h1 align="center"> -------------- </h1>
    <p align = "center"></p>
    </div>
	
	
	<script src="script.js"> </script>
	
	<h4 align= "center" id="header" class="header"></h4>
	<p align= "center" id="header2" class="header2"></p>
	<h4 align= "center" id="timer" class="timer"></h4>
	<br>
    
    
</head>


	<div class="Make">
		<div class="container">
	 <div class="col-md-5">
	 <h1> Questions </h1>
	 <br>
	 <a class="ehideDisplay">
	 <p> 1. How many endoscopies (upper endoscopy or colonoscopy) has the patient received? </p>
	</a>
	<br>
	
	
	<a class="hideDisplay">
	<p> 2. If the patient had at least one endoscopy, have biopsies been taken? </p>
	</a>
	<br>
	
	<a class="hideDisplay">
	<p> 3. Did the patient ever have a CT scan of the abdomen or pelvis? </p>
	</a>
	
	<br>
	
	<a class="hideDisplay">
	<p> 4. What is the patient’s most recent Creatinine? Cr: __ Date___ </p>
	</a>
	
	<br>
	
	<a class="bhideDisplay">
	<p> 5. What is the patient’s most recent Hemoglobin? Hgb:___  date: ___</p>
	</a>
	
	<br>
	
	<a class="chideDisplay">
	<p> 6. Who is the patient’s referring provider?</p>
	</a>
	
	<br>
	
	<a class="hideDisplay">
	<p> 7. Is the patient on a PPI? </p>
	</a>
	
	<br>
	
	<a class="ahideDisplay">
	<p> 8. Does the patient actively smoke or have a history of smoking? (Yes, No, Not mentioned)</p>
	</a>
	
	<br>
	
	<a class="ahideDisplay">
	<p> 9. What was the date of the patient’s last visit with a physician?</p>
	</a>
	
	<br>
	
	<a class="ahideDisplay">
	<p> 10. Does the patient have any allergies? (Yes/No/No information)</p>
	</a>
		
      </div>



<div class="col-md-4">
<h1 > Your Answers  </h1>
	  <br>
	  1. <textarea rows="2" cols="40" name="a1" form="a1"></textarea>
	  <br><br>
	  2. <textarea rows="2" cols="40" name="a2" form="a2"></textarea>
	  <br><br>
	  3. <textarea rows="2" cols="40" name="a3" form="a3"></textarea>
	  <br><br>
	  4. <textarea rows="2" cols="40" name="a4" form="a4"></textarea>
	  <br><br>
	  5. <textarea rows="2" cols="40" name="a5" form="a5"></textarea>
	  <br><br>
	  6. <textarea rows="2" cols="40" name="a6" form="a6"></textarea>
	  <br><br>
	  7. <textarea rows="2" cols="40" name="a7" form="a7"></textarea>
	  <br><br>
	  8. <textarea rows="2" cols="40" name="a8" form="a8"></textarea>
	  <br><br>
	  9. <textarea rows="2" cols="40" name="a9" form="a9"></textarea>
	  <br><br>
	  10. <textarea rows="2" cols="40" name="a10" form="a10"></textarea>
	  <br>
		

</div>

<div class="Sell">
      <div class="col-md-3">
        <h1 align=center> Timer </h1>
        <br>
        <br>
        <a align="center" class="ahideDisplay">
	<button type="button" onclick="recordTime()"> Start Timer</button>
	<span class="showDisplayOnHover">
	<b> Start timer for Question </b>
	<span class="showBodyOfDisplayOnHover">
	<br>
	The stopwatch will begin for the question.
	<br>
	</span>
	</span>
	</a>
	
	<br> 
	<br> 
	
	<a align="center" class="hideDisplay">
	<button align="center" type="button" onclick="recordTime2()"> End Timer</button>
	<span class="showDisplayOnHover">
	<b> End timer for Question </b>
	<span class="showBodyOfDisplayOnHover">
	<br>
	The time taken will be recorded and written below.
	</span>
	</span>
	</a>
	<br>
	<br>
	<h2 align=center> Timing History: </h2>
	<div align="center" id="q1"> Q1: -- not completed -- </div>
	<div align="center" id="q2"> Q2: -- not completed -- </div>
	<div align="center" id="q3"> Q3: -- not completed -- </div>
	<div align="center" id="q4"> Q4: -- not completed -- </div>
	<div align="center" id="q5"> Q5: -- not completed -- </div>
	<div align="center" id="q6"> Q6: -- not completed -- </div>
	<div align="center" id="q7"> Q7: -- not completed -- </div>
	<div align="center" id="q8"> Q8: -- not completed -- </div>
	<div align="center" id="q9"> Q9: -- not completed -- </div>
	<div align="center" id="q10"> Q10: -- not completed -- </div>
	
      </div>
</div>

</div>
</div>
<br>
