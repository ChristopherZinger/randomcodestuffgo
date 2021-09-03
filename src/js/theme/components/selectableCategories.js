export default class SelectableCategories {
	init () {
		const theBlock = document.querySelector('.selectable-categories')
		if (!theBlock) return

		this.cards = Array.from(
			theBlock.querySelectorAll('.selectable-categories__item')
		)
		this.input = document.querySelector('.selectable-categories__input')
		this.clearBtn = document.querySelector('.selectable-categories__clear-search-btn')

		if (!this.cards || !this.input) {
			console.log('no input or selectables')
			return
		}

		this.handleInput()
		this.handleClear()
	}

	handleClear () {
		this.clearBtn.addEventListener('click', () => {
			this.input.value = null
			this.cards.forEach(c => { c.style.display = 'block' })
		})
	}

	updateStyles (card, value) {
		const title = card.getAttribute('data-title')
		if (title.includes(value)) {
			card.style.display = 'block'
		} else {
			card.style.display = 'none'
		}
	}

	handleInput () {
		this.input.addEventListener('input', ({target: {value}}) => {
			this.cards.forEach(card => {
				this.updateStyles(card, value)
			});
		})
	}

	constructor () {
		this.init()
	}
}