
function loadMagic() {
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", "http://github.com/seanjones2848/computer_musings/txt/book_chop/div_666");
	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status == 0) {
				var allMagic = rawFile.responseText;
				alert(allMagic);
				console.log(allMagic);
			}
		}
	}
}

function newDivination() {
	var book = Math.floor(Math.random() * 10);
	var iteration = Math.floor(Math.random() * 60);
	var divination = '<p>no magic for you yet {' + book + ',' + iteration + '}</p>';
	loadMagic();
	document.getElementById('divinationDisplay').innerHTML = divination;
}
