function createTable()
{
	var path = "../img/";
	var number = 15;
	var type = "_crop.jpg";
	var img_class = "class=\"img-rounded\" title=\"";

	var fotos = new Array(number);
	var titles = new Array(number);

	var count = 1;
	for (var i = 0; i < number; i++) {
		fotos[i] = path + count + type;
		count++;
	}

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

	var html='<table><tr>';
	count = 0;
	for (i = 0; i < number; i++) {
		html += '<td><img src=\"' + fotos[i] + '\" ' +  img_class + titles[i] + '\"><p>' + titles[i] + '</p></td>';
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