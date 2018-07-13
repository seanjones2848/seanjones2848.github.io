var book;
var iteration;
var raw_URL = "https://raw.githubusercontent.com/seanjones2848/computer_musings/master/txt/book_chop/div_";
var divs = [ "1", "24", "42", "5", "6", "666", "7", "777", "8", "9" ];

function setup() {
	book = Math.floor(Math.random() * 10);
	iteration = Math.floor(Math.random() * 59) + 1;
	var div_URL = raw_URL + divs[book];
	loadStrings(div_URL, get_div);
}

function get_div(Book) {
	var wholeBook = JSON.stringify(Book);
	var div_start = wholeBook.search(("Iteration " + iteration)) + 55;
	var div_stop = wholeBook.search(("Iteration " + (iteration + 1)));
	var divination = "Book: " + book + '","' + "Chapter: " + iteration + '","' + wholeBook.substring(div_start, div_stop);
	var div = divination.replace(/\",\"/g, '<br>');
	console.log("divination: " + div);
	document.getElementById('divinationDisplay').innerHTML = div;
}

function newDivination() {
	setup();
}
