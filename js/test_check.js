function answer_check (){
	var answer = document.test.message.value;

	console.log(answer);
	if (answer.match(/-?\d+\.\d+/) !== null) {
		alert ("В ответе не должно быть десятичных чисел!");
		document.getElementById('message').focus();
	} 	
}