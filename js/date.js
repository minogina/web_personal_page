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
	$(document).ready(function() {
			$("#birthday").datepicker({
				monthNames:["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
				dayNamesMin:["Вс", "Пн","Вт","Ср","Чт","Пт","Сб"],
				firstDay:1,
				dateFormat:"dd.mm.yy"
			});
		});
}