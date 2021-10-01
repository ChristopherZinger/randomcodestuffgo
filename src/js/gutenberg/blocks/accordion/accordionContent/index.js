import edit from './edit'
import { colors } from '../../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.blockEditor

export default () => {
    registerBlockType('rc/accordion-content', {
        title: __('Accordion Content', 'rc'),
        icon: {
            foreground: colors.red,
            src: 'text',
        },
		parent: ['rc/accordion'],
        category: 'rc',
        attributes: {},
        edit,
        save: () => <InnerBlocks.Content />
    })
}
