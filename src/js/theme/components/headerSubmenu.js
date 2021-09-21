export default class {
	init () {
		this.menu = Array.from(document.querySelectorAll('.primary-menu .menu-item-has-children'))
		this.handleSubmenu()
	}

	constructor () {
		this.init()
	}

	handleSubmenu () {
		document.addEventListener('click', (e) => {
			if (this.menu.includes(e.target)) {
				e.target.classList.toggle('is-open')
			}
		})
	}
}