import edit from './edit'
import { colors } from '../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.blockEditor

export default () => {
    registerBlockType('rc/list-three-pages', {
        title: __('List Three Pages', 'rc'),
        description: __('List Three Pages', 'rc'),
        icon: {
            foreground: colors.red,
            src: 'screenoptions',
        },
        category: 'rc',
        attributes: {
            pagesIds: {
                type: 'array',
                default: [],
            },
        },
        edit,
        save: (props) => <InnerBlocks.Content />,
    })
}
