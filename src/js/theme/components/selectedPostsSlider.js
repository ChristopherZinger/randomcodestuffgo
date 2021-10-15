import { tns } from '../../../../node_modules/tiny-slider/src/tiny-slider'

export const selectedPostsSlider = () => {
    const selectors = {
        sliderContainer: '.selected-posts__slider-container',
        slider: '.selected-posts__slider',
        nav: '.selected-posts__slider-nav',
        controls: '.selected-posts__slider-controls',
    }

    const containers = document.querySelectorAll(selectors.sliderContainer)

    containers.forEach((container) => {
        const slider = container.querySelector(selectors.slider)
        const nav = container.querySelector(selectors.nav)
        const controls = container.querySelector(selectors.controls)

        if (!slider || !nav || !controls) {
            return
        }

        tns({
            container: slider,
            items: 1,
            gutter: 40,
            mouseDrag: true,
            arrowKeys: true,
            controls: true,
            controlsContainer: controls,
            slideBy: 'page',
            navContainer: nav,
            nav: true,
            speed: 500,
            responsive: {
                650: {
                    items: 2,
                },
                1200: {
                    items: 4,
                },
            },
        })
    })
}
