import edit from './edit'
import { colors } from '../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

export default () => {
    registerBlockType('rc/selected-posts', {
        title: __('Pages or Posts List', 'rc'),
        description: __('List of 4 Pages or Posts displayed in cards in a row.', 'rc'),
        icon: {
            foreground: colors.red,
            src: 'screenoptions',
        },
        category: 'rc',
        attributes: {
            title: {
                type: 'string',
            },
            link: {
                type: 'object',
                default: {
                    text: '',
                    url: '',
                    openInNewTab: false,
                    name: '',
                },
            },
            isTypePost: {
                type: 'boolean',
                default: false,
            },
            ids: {
                type: 'array',
                default: [],
            },
        },
        edit,
        save: () => {},
    })
}
