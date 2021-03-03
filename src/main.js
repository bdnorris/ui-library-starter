const header = document.querySelector('h1');
if (header) {
	header.addEventListener('click', (e) => {
		console.log(e.currentTarget);
	})
}