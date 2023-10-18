function getName() {
	var inputName = document.getElementById('name').value;
	var inputMarks = document.getElementById('marks').value;
	var userName = document.write('<h1>',"Name :",'</h1>','<h2>',inputName,'</h2>', '<hr>');
	var userResult = document.write('<h1>',"Score :",'</h1>','<h2>',inputMarks,"/100",'</h2>','<hr>');




	if(inputMarks <= 100 && inputMarks >= 80){
		document.write('<h3>',"Grade : A+",'<br>',"Congratulation! You are Pass",',</h3>');
	}else if(inputMarks <= 80 && inputMarks >= 60){
		document.write('<h3>',"Grade : B",'<br>',"Congratulation! You are Pass",'</h3>');
	}else if(inputMarks <= 60 && inputMarks >= 40){
		document.write('<h3>',"Grade : C",'<br>',"Congratulation! You are Pass",'</h3>');
	}else if(inputMarks <= 40 && inputMarks >= 33){
		document.write('<h3>',"Grade : D",'<br>',"Congratulation! You are Pass",'</h3>');
	}else if(inputMarks <= 33 && inputMarks >= 0){
		document.write('<h3>'," Grade : F",'<br>',"Ooops! You are Fail",'</h3>');
	}else{
		alert("You enter wrong entry");
	}


	document.GetElementById("here").InnerHTML = userName;
	document.GetElementById("here").InnerHTML = userResult;

}


