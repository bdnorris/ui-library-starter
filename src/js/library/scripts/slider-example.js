import domSlider from "dom-slider";

export default () => {
	const { slideDown, slideUp, slideToggle } = window.domSlider

	const box = document.getElementById('test-slide');
	const button = document.getElementById('slide-button');

	if (button) {
		button.addEventListener('click', () => {
			slideToggle({ element: box });
			console.log('hello from slider example');
		})
	}
}