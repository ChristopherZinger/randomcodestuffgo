import edit from './edit'
import { colors } from '../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.blockEditor

export default () => {
    registerBlockType('rc/section-header', {
        title: __('Section header', 'rc'),
        description: __('Section Header', 'rc'),
        icon: {
            foreground: colors.red,
            src: 'pressthis',
        },
        category: 'rc',
        attributes: {},
        edit,
        save: (props) => <InnerBlocks.Content />,
    })
}
