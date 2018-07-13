function newDivination() {
	var book = Math.floor(Math.random() * 10);
	var iteration = Math.floor(Math.random() * 59) + 1;
	var raw_URL = "https://raw.githubusercontent.com/seanjones2848/computer_musings/master/txt/book_chop/div_"
	var divs = [ "1", "24", "42", "5", "6", "666", "7", "777", "8", "9" ];
	var div_URL = raw_url + divs[book];
	var wholeBook = loadStrings(div_URL);
	var div_start = wholeBook.search("Iteration " + iteration);
	var div_stop = wholeBook.search("Iteration " + (iteration + 1));
	var divination = "Book: " + book + " Chapter: " + iteration + " " + wholeBook.substring(div_start, div_stop);
	document.getElementById('divinationDisplay').innerHTML = divination;
}
