export default class SelectableCategories {
    init() {
        const theBlock = document.querySelector('.selectable-categories')
        this.form = document.querySelector('.selectable-categories__form-wrapper #searchform')

        if (!theBlock || !this.form) return

        this.preventSubmit()

        this.cards = Array.from(theBlock.querySelectorAll('.selectable-categories__item'))
        this.input = document.querySelector('.selectable-categories__input')
        this.clearBtn = document.querySelector('.selectable-categories__clear-search-btn')

        if (!this.cards || !this.input) {
            return
        }

        this.handleInput()
        this.handleClear()
    }

    preventSubmit() {
        this.form.addEventListener('submit', (e) => e.preventDefault())
    }

    handleClear() {
        this.clearBtn.addEventListener('click', () => {
            this.input.value = null
            this.cards.forEach((c) => {
                c.style.display = 'block'
            })
        })
    }

    updateStyles(card, value) {
        const title = card.getAttribute('data-title')
        if (title.includes(value)) {
            card.style.display = 'block'
        } else {
            card.style.display = 'none'
        }
    }

    handleInput() {
        this.input.addEventListener('input', ({ target: { value } }) => {
            this.cards.forEach((card) => {
                this.updateStyles(card, value)
            })
        })
    }

    constructor() {
        this.init()
    }
}
