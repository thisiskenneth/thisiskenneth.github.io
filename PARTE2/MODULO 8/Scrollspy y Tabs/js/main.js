$('.carousel').carousel({
	interval:3000,
	pause:"hover"
})

document.getElementById('backButton').addEventListener('click', function () {
	window.location.href = '../../index.html';
});