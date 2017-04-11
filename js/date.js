function GetClock(){
	var month_array = new Array("Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря");
	var d=new Date();
	var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
	if (nyear < 1000)
		nyear += 1900
	var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
	if(nmin<=9) 
		nmin="0"+nmin
	if(nsec<=9) 
		nsec="0"+nsec;
	document.getElementById("data").innerHTML= ""+ ndate + " " +month_array[nmonth]+" "+ nyear + " " + nhour + ":" + nmin + ":" +nsec + "";
}
window.onload=function(){
	GetClock();
	setInterval(GetClock,1000);
}

function Calendar(){
	var number = 2000;
	html = '<option value=\"' + 1973 + '\">' + 1973 + '</option>';
	for (i = 1974; i < number; i++) {
		html += '<option value=\"';
		html += i + '\">' + i;
		html += '</option>';
		document.getElementById('year').innerHTML = html;
	}
	html += '</select>';
	document.getElementById('year').innerHTML = html;
}

/*function Calendar_day(){
	var number = 31;
	html = '<option value=\"' + 1 + '\">' + 1 + '</option>';
	for (i = 2; i <= number; i++) {
		html += '<option value=\"';
		html += i + '\">' + i;
		html += '</option>';
		document.getElementById('day').innerHTML = html;
	}
	html += '</select>';
	document.getElementById('day').innerHTML = html;
}*/

var prevId = 1;

function Calendar_day(){
	var number = 31;
	var count = 5;
	html = '<div id=\"1\" style =\"display: inline-block; width:29px; border: 1px solid #948787; border-radius: 4px;\" onClick = \"chooseDay(id)\"><p>1</p></div>';
	document.getElementById('day').innerHTML = html;
	for (i = 2; i <= number; i++) {
		if (count > 0){
		html += '<div id=\"' + i + '\"' + ' style =\"display: inline-block; width:29px; border: 1px solid #948787; border-radius: 4px;\" onClick = \"chooseDay(id)\">';
		html += '<p>';
		html += i + '</p>';
		html += '</div>';
		count--;
	}
	else if (count == 0) {
		html += '<div id=\"' + i + '\"' + ' style =\"display: inline-block; width:29px; border: 1px solid #948787; border-radius: 4px;\" onClick = \"chooseDay(id)\">';
		html += '<p>';
		html += i + '</p>';
		html += '</div>';
		html += '<br>';
		count = 6;
	} 
		document.getElementById('day').innerHTML = html;
	}
	document.getElementById('1').style.setProperty('border-color', 'red');
}

function chooseDay(id){	
	document.getElementById(prevId).style.setProperty('border-color', '#948787');
	document.getElementById(id).style.setProperty('border-color', 'red');
	prevId = id;
}