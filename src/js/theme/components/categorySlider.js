import { tns } from '../../../../node_modules/tiny-slider/src/tiny-slider'

export const categorySlider = () => {
    const selectors = {
        sliderContainer: '.row-of-categories__row',
        slider: '.row-of-categories__slider',
        nav: '.row-of-categories__slider-nav',
        controls: '.row-of-categories__slider-controls',
    }

    const sliderContainers = document.querySelectorAll(selectors.sliderContainer)

    sliderContainers.forEach((container) => {
        const slider = container.querySelector(selectors.slider)
        const navContainer = container.querySelector(selectors.nav)
        const controlsContainer = container.querySelector(selectors.controls)

        if (!slider) {
            return
        }

        tns({
            container: slider,
            items: 1,
            gutter: 40,
            mouseDrag: true,
            arrowKeys: true,
            // autoplay: true,
            // autoplayTimeout: 7000,
            controls: true,
            controlsContainer: controlsContainer,
            // autoplayHoverPause: true,
            autoplayButtonOutput: false,
            slideBy: 'page',
            navContainer,
            nav: true,
            navPosition: 'bottom',
            speed: 500,
            responsive: {
                650: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
            },
        })
    })
}
