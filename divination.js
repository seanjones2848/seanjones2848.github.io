function newDivination() {
	var book = Math.floor(Math.random() * 10);
	var iteration = Math.floor(Math.random() * 60);
	document.getElementById('divinationDisplay').innerHTML = 'no magic for you yet' + book + ieration;
}
