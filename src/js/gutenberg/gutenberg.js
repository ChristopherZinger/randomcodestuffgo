import initBlockStyles from './config/blockStyles'
import PostCard from './blocks/post-card'
import Accordion from './blocks/accordion'
import AccordionHeader from './blocks/accordion/accordionHeader'
import AccordionContent from './blocks/accordion/accordionContent'
import AccordionList from './blocks/accordionList'
import NextPrevBtn from './blocks/next-prev-btn'
import Section from './blocks/section'
import SelectableCategories from './blocks/selectable-categories'
import SpecialList from './blocks/special-list'
import SpecialListItem from './blocks/special-list/special-list-item'
import SeriesNavigationButtons from './blocks/series-navigation-buttons'
import RowOfSeries from './blocks/row-of-series'
import LatestPosts from './blocks/latest-posts'

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
Accordion()
AccordionContent()
AccordionHeader()
AccordionList()
LatestPosts()
NextPrevBtn()
PostCard()
RowOfSeries()
SelectableCategories()
SpecialList()
SpecialListItem()
Section()
SeriesNavigationButtons()
