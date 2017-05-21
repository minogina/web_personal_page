function answer_check (){
	var answer = document.test.message.value;

	console.log(answer);
	if (answer.match(/-?\d+\.\d+/) !== null) {
		alert ("В ответе не должно быть десятичных чисел!");
		document.getElementById('message').focus();
	} 	
}

$(document).ready(function(){ 
	$('#message').mouseenter(function() { 
		$('#message').popover('show'); 
	}); 
	$('#message').mouseleave(function(){setTimeout(function(){$('#message').popover('hide')}, 2000);}); 
});