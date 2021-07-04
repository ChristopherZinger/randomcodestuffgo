import initBlockStyles from './config/blockStyles'
import listThreeSeries from './blocks/list-three-series'
import { colors } from './settings'

const { __ } = wp.i18n
const { setCategories, getCategories } = wp.blocks

// unregisterBlockStyle doesn't work inside wp.domReady
// https://github.com/WordPress/gutenberg/issues/25330

window.onload = () => {
    initBlockStyles()
}

// Add Van Ons block category with custom icon
setCategories([
    {
        slug: 'rc',
        title: __('Random Code', 'rc'),
        icon: 'buddicons-replies',
    },
    ...getCategories().filter(({ slug }) => slug !== 'rc'),
])

// Register blocks
listThreeSeries()
