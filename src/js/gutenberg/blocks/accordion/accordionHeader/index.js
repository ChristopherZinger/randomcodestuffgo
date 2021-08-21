import edit from './edit'
import { colors } from '../../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.blockEditor

export default () => {
    registerBlockType('rc/accordion-header', {
        title: __('Accordion Header', 'rc'),
        icon: {
            foreground: colors.red,
            src: 'excerpt-view',
        },
		parent: ['rc/accordion'],
        category: 'rc',
        attributes: {},
        edit,
        save: () => <InnerBlocks.Content />
    })
}
