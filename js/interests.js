function createList(type) {
	document.write("<" + type + "L>");
	for (var i = 1; i < createList.arguments.length; i++) {
		document.write("<li>" + createList.arguments[i] + "</li>");
	}
	document.write("</" + type + "l>");
}