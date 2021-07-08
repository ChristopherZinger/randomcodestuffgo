import edit from './edit'
import { colors } from '../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

export default () => {
    registerBlockType('rc/post-card', {
        title: __('Post Card', 'rc'),
        description: __('Post Card with post picker', 'rc'),
        icon: {
            foreground: colors.red,
            src: 'pressthis',
        },
        category: 'rc',
        attributes: {
            post: {
                type: 'object',
            },
        },
        edit,
        save: (props) => {},
    })
}
