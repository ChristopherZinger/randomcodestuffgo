import edit from './edit'
import { colors } from '../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.blockEditor

export default () => {
    registerBlockType('rc/grid-of-posts', {
        title: __('Grid of posts', 'rc'),
        description: __('Grid of posts', 'rc'),
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
