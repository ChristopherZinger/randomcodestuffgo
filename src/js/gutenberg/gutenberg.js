import initBlockStyles from './config/blockStyles'
import postCard from './blocks/post-card'
import section from './blocks/section'
import accordion from './blocks/accordion'
import accordionContent from './blocks/accordion/accordionContent'
import accordionList from './blocks/accordionList'
import SelectableCategories from './blocks/selectable-categories'
import SpecialList from './blocks/special-list'
import SpecialListItem from './blocks/special-list/special-list-item'
import accordionHeader from './blocks/accordion/accordionHeader'

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
accordion()
accordionContent()
accordionList()
SelectableCategories()
SpecialList()
SpecialListItem()
accordionHeader()
postCard()
section()
