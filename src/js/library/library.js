// import "core-js/features/promise"; <- polyfills, feature, or all on the next line
import coreJs from "core-js";
import myscript from "./scripts/myscript.js";
import domSlider from "dom-slider";


myscript();

// main.js

const { slideDown, slideUp, slideToggle } = window.domSlider

const box = document.getElementById('test-slide');
const button = document.getElementById('slide-button');

if (button) {
	button.addEventListener('click', () => {
		slideToggle({ element: box });
	})
}