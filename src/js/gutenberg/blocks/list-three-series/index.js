import edit from './edit'
import { colors } from '../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

export default () => {
    registerBlockType('rc/list-three-series', {
        title: __('List Three Pages', 'rc'),
        description: __("List Three Pages with Parent 'Series'", 'rc'),
        icon: {
            foreground: colors.red,
            src: 'screenoptions',
        },
        category: 'rc',
        attributes: {},
        edit,
        save: (props) => {},
    })
}
