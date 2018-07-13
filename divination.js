function newDivination() {
	var raw_URL = "https://raw.githubusercontent.com/seanjones2848/computer_musings/master/txt/book_chop/div_"
	var divs = [ "1", "24", "42", "5", "6", "666", "7", "777", "8", "9" ];
	var book = Math.floor(Math.random() * 10);
	var div_URL = raw_url + divs[book];
	var div = loadStrings(div_URL, div_get);
}

function div_get(div) {
	var iteration = Math.floor(Math.random() * 59) + 1;
	var div_start = div.search("Iteration " + iteration);
	var div_stop = div.search("Iteration " + (iteration + 1));
	var divination = div.substring(div_start, div_stop);
	document.getElementById('divinationDisplay').innerHTML = divination;
}
