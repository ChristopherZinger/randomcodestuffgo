import edit from './edit'
import { colors } from '../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.blockEditor

export default () => {
    registerBlockType('rc/accordion', {
        title: __('Accordion', 'rc'),
        icon: {
            foreground: colors.red,
            src: 'heading',
        },
        parent: ['rc/accordion-list'],
        category: 'rc',
        attributes: {},
        edit,
        save: () => <InnerBlocks.Content />
    })
}
