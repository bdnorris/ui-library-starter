// Scripts for UI-Kit Site, not for you library

console.log('Hello from the UI Kit')

const panelControl = document.querySelector('.panel__control')
const panel = document.querySelector('.panel')

if (panelControl && panel) {
	panelControl.addEventListener('click', () => {
		panel.classList.toggle('active')
		if (panelControl.getAttribute('aria-expanded') === 'true') {
			panelControl.setAttribute('aria-expanded', 'false')
		} else {
			panelControl.setAttribute('aria-expanded', 'true')
		}
	})
}