import { traversParentNodes } from './utils'

export default class {
	init () {
		this.accordions = document.querySelectorAll('.accordion__header')
		this.accordionsFirstChildren = document.querySelectorAll('.accordion:first-child .accordion__content')

		this.openAccordionsFirstChild()
		this.handleClick()
	}

	constructor () {
		this.init()
	}

	openAccordionsFirstChild () {
		this.accordionsFirstChildren.forEach(accordion => {
			console.log(accordion)
			accordion.style.maxHeight = accordion.scrollHeight + 'px'
		})
	}

	handleClick () {
		this.accordions.forEach(accordion => {
			accordion.addEventListener('click', () => {
				const content = accordion.nextElementSibling
				if (content.classList.contains('accordion__content')) {
					this.handleMaxHeight(content)
				}
			})
		})
	}

	handleMaxHeight (target) {
		console.log(target.style.maxHeight)
		if (target && target.style.maxHeight) {
			target.style.maxHeight = null;
		  } else {
			target.style.maxHeight = target.scrollHeight + 'px' 
		  } 
	}
}