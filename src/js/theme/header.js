export default () => {
    const menuButton = document.querySelector('.primary-menu__mobile-button')
    const primaryMenuContentMiddle = document.querySelector('.primary-menu__content-middle')
    const menuItemHasChildren = document.querySelector('.menu-item-has-children')

    const init = () => {
        if (!menuButton) {
            return
        }

        if (!primaryMenuContentMiddle) {
            console.log('primary menu is missing')
            return
        }

        setAllEventListeners()
    }

    const setAllEventListeners = () => {
        menuButton.addEventListener('click', handlePrimarMenuToggle)
        menuItemHasChildren.addEventListener('click', handleSubmenuToggle)
    }

    const handleSubmenuToggle = ({ target }) => {
        if (!target instanceof HTMLElement) {
            console.log(target)
        }
        target.classList.toggle('sub-menu--open')
    }

    const handlePrimarMenuToggle = () => {
        primaryMenuContentMiddle.classList.toggle('primary-menu--open')
    }

    return {
        init,
    }
}
