import edit from './edit'
import { colors } from '../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

export default () => {
    registerBlockType('rc/latest-posts', {
        title: __('latest-posts', 'rc'),
        icon: {
            foreground: colors.red,
            src: 'screenoptions',
        },
        category: 'rc',
        attributes: {
            link: {
                type: 'object',
                default: {
                    text: '',
                    url: '',
                    openInNewTab: '',
                },
            },
            title: {
                type: 'string',
                default: '',
            },
        },
        edit,
        save: () => {},
    })
}
