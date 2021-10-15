import edit from './edit'
import { colors } from '../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.blockEditor

export default () => {
    registerBlockType('rc/post-list-with-search', {
        title: __('Post List With Search Bar', 'rc'),
        description: __('Vertical list of posts with search bar on top.', 'rc'),
        icon: {
            foreground: colors.red,
            src: 'list-view',
        },
        category: 'rc',
        attributes: {
            ids: {
                type: 'array',
                default: [],
            },
            isTypePost: {
                type: 'boolean',
                default: true,
            },
            hideSearchBar: {
                type: 'boolean',
                default: false,
            },
        },
        edit,
        save: (props) => <InnerBlocks.Content />,
    })
}
