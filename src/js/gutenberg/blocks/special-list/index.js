import edit from './edit'
import { colors } from '../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.blockEditor

export default () => {
    registerBlockType('rc/special-list', {
        title: __('Accordion Special List', 'rc'),
        icon: {
            foreground: colors.red,
            src: 'editor-ol-rtl',
        },
        category: 'rc',
        attributes: {},
        edit,
        save: () => <InnerBlocks.Content />
    })
}
