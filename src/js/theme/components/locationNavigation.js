export default class LocationNavigation {
    constructor() {
        this.init()
    }

    init() {
        this.sections = document.querySelectorAll('.rc-section')
        new NavItemCreator(this.sections)
        new NavHandler(this.sections)
    }
}

class NavHandler {
    init() {
        this.skipScrollCheck = false
        this.navItems = document.querySelectorAll('.location-nav-item')
        this.handleScroll()
        this.handleClickOnNavItem()
    }

    constructor(sections) {
        this.sections = sections
        this.init()
    }

    handleClickOnNavItem() {
        this.navItems.forEach((navEl) => {
            const slug = navEl.getAttribute('data-section-slug')
            const id = navEl.getAttribute('data-section-id')
            navEl.addEventListener('click', () => {
                document
                    .querySelector('.rc-section__' + slug)
                    .scrollIntoView({ behavior: 'smooth' })
                this.handleUseScrollHandlingWhenNavItemClicked()
                this.setCurrentSection(id)
            })
        })
    }

    handleUseScrollHandlingWhenNavItemClicked() {
        let scrollTimeout
        this.disableUserScrollHandling()
        const self = this
        addEventListener('scroll', () => {
            clearTimeout(scrollTimeout)
            scrollTimeout = setTimeout(() => {
                self.enableUserScrollHandling()
            }, 100)
        })
    }

    enableUserScrollHandling() {
        this.skipScrollCheck = false
    }

    disableUserScrollHandling() {
        this.skipScrollCheck = true
    }

    getCurrentSection() {
        for (const [i, section] of Object.entries(this.sections)) {
            if (section.offsetTop + section.offsetHeight - window.pageYOffset > 0) {
                return i
            }
        }
    }

    setCurrentSection(currItem) {
        for (const [i, section] of Object.entries(this.navItems)) {
            if (i == currItem) {
                section.classList.add('is-active')
            } else {
                section.classList.remove('is-active')
            }
        }
    }

    handleScroll() {
        window.addEventListener('scroll', () => {
            if (this.skipScrollCheck) return
            const currSection = this.getCurrentSection()
            this.setCurrentSection(currSection)
        })
    }
}

class NavItemCreator {
    constructor(sections) {
        this.sections = sections
        this.init()
    }

    init() {
        this.navContainer = document.querySelector('.sidebar-location-navigation')
        if (!this.navContainer) return
        this.createNavItems()
    }

    createNavItems() {
        for (const [key, section] of Object.entries(this.sections)) {
            const slug = section.getAttribute('data-section-slug')
            const name = section.getAttribute('data-section-name')
            this.createItem(name, slug, key)
        }
    }

    createItem(text, slug, id) {
        const navEl = document.createElement('div')
        const newContent = document.createTextNode(text)
        navEl.appendChild(newContent)
        navEl.classList.add('location-nav-item')
        navEl.setAttribute('data-section-slug', slug)
        navEl.setAttribute('data-section-id', id)
        this.navContainer.appendChild(navEl)
    }
}
