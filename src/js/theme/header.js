import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
export default class {
    init() {
        this.menuButton = document.querySelector('.primary-menu__hamburger')
        this.menu = document.querySelector('.primary-menu')
        this.rolledUpMenu = document.querySelector('#menu-primary-menu')
        this.openMenuStyle = 'primary-menu--open'

        this.enableBodyScrollIfNotMobile()

        if (!this.menu || !this.menuButton) return

        this.handleOpenCloseMenu()
    }

    constructor() {
        this.init()
    }

    enableBodyScrollIfNotMobile() {
        document.addEventListener('resize', () => {
            if (window.innerWidth > 640) {
                clearAllBodyScrollLocks()
            }
        })
    }

    handleBodyLock() {
        const isMenuOpen = this.menu.classList.contains(this.openMenuStyle)
        if (isMenuOpen) {
            clearAllBodyScrollLocks()
        } else {
            disableBodyScroll(this.rolledUpMenus)
        }
    }

    handleOpenCloseMenu() {
        this.menuButton.addEventListener('click', () => {
            this.handleBodyLock()
            this.menu.classList.toggle(this.openMenuStyle)
        })
    }
}
