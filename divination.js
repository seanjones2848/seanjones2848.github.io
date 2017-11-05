function newDivination() {
	var book = Math.floor(Math.random() * 10);
	var iteration = Math.floor(Math.random() * 60);
	var divination = 'no magic for you yet' + book + iteration;
	document.getElementById('divinationDisplay').innerHTML = divination;
}
