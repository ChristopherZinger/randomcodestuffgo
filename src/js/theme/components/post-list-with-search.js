export default class PostListWithSearch {
    constructor() {
        this.init()
    }

    init() {
        this.input = document.querySelector('.post-list-with-search #s')
        this.submitBtn = document.querySelector('.post-list-with-search #searchsubmit')
        this.form = document.querySelector('.post-list-with-search #searchform')
        this.searchQuery = ''
        this.items = Array.from(document.querySelectorAll('.post-list-with-search__item'))

        if (!this.input || !this.form || !this.submitBtn) {
            return
        }

        this.form.addEventListener('submit', this.handleFormSubmit.bind(this))
        this.input.addEventListener('input', this.handleInputChange.bind(this))
    }

    handleInputChange({ target }) {
        const inputValue = target?.value

        this.items.forEach((item) => {
            if (inputValue === '') {
                item.style.display = 'block'
                return
            }
            if (item.getAttribute('data-title').includes(inputValue)) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    }

    handleFormSubmit(e) {
        e.preventDefault()
    }
}
