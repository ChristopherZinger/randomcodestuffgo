import edit from './edit'
import { colors } from '../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

export default () => {
    registerBlockType('rc/row-of-series', {
        title: __('Row of Series', 'rc'),
        description: __('This block is for Home Page', 'rc'),
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
            categories: {
                type: 'array',
                default: [],
            },
        },
        edit,
        save: () => {},
    })
}
