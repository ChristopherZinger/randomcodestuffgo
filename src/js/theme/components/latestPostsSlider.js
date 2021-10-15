import { tns } from '../../../../node_modules/tiny-slider/src/tiny-slider'

export const latestPostsSlider = () => {
    const selectors = {
        slider: '.latest-posts__slider',
        nav: '.latest-posts__slider-nav',
        controls: '.latest-posts__slider-controls',
    }

    const container = document.querySelector(selectors.slider)
    const nav = document.querySelector(selectors.nav)
    const controls = document.querySelector(selectors.controls)

    if (!container || !nav || !controls) {
        return
    }

    tns({
        container,
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
                items: 3,
            },
            1350: {
                items: 6,
            },
        },
    })
}
