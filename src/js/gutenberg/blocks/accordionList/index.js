import edit from './edit'
import { colors } from '../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.blockEditor

export default () => {
    registerBlockType('rc/accordion-list', {
        title: __('Accordion List', 'rc'),
        icon: {
            foreground: colors.red,
            src: 'excerpt-view',
        },
        category: 'rc',
        attributes: {},
        edit,
        save: () => <InnerBlocks.Content />
    })
}
