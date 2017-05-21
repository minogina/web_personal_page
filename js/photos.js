var path = "../img/";
var number = 15;
var type = "_crop.jpg";
var img_class = "class=\"img-rounded\" onClick=\"view();\" title=\"";
var titles = new Array(number);
var fotos = new Array(number);

titles[0] = "Рим";
	titles[1] = "Грузия";
	titles[2] = "Санкт-Петербург";
	titles[3] = "Москва";
	titles[4] = "Альпы, Швейцария";
	titles[5] = "Люцерн, Швейцария";
	titles[6] = "Озеро Светлое";
	titles[7] = "Мыс Фиолент";
	titles[8] = "Нижний Новгород";
	titles[9] = "остров Лансароте";
	titles[10] = "остров Лансароте";
	titles[11] = "остров Лансароте";
	titles[12] = "Киргизия";
	titles[13] = "Кронштадт";
	titles[14] = "Алма-Ата";
	var count = 1;
	for (var i = 0; i < number; i++) {
		fotos[i] = path + count + type;
		count++;
	}

function createTable()
{
	var html='<table><tr>';
	count = 0;
	for (i = 0; i < number; i++) {
		html += '<td><img src=\"' + fotos[i] + '\" ' +  img_class + titles[i] + '\"><p id=' + i + "> " + titles[i] + '</p></td>';
		count++;
		if (count == 4) {
			html += '</tr><tr>';
			count = 0;
		} else if (number == 14) {
			html += '</tr></table>';
		}
		document.getElementById('img_table').innerHTML = html;
	}
}

function view () {
	// $('img').click(function(){
		$("#modal").dialog({modal:true, height:550, width:740});
		// var imgsrc = $(this).attr('src').split("_crop")[0] + ".jpg";
		// $("#large").attr('src',imgsrc);

		// var temp = $(this).attr('src').split("_crop.jpg")[0].replace('../img/', '');
		// temp = temp - 1;
		// var name = titles[temp];
		// $("#modal").attr('title', name);
		// $("#title").text(name);		
	// });
}