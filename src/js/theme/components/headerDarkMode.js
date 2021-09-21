export default class {
    init() {
        this.button = document.querySelector('.primary-menu__color-mode')
        this.body = document.querySelector('body')
        if (!this.button || !this.body) return

        this.handleDarkMode()
    }

    constructor() {
        this.init()
    }

    handleDarkMode() {
        this.button.addEventListener('click', () => {
            this.body.classList.toggle('is-dark-mode')
        })
    }
}
