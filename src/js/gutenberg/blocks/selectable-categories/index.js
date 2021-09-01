import edit from './edit'
import { colors } from '../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

export default () => {
    registerBlockType('rc/selectable-categories', {
        title: __('List of categories', 'rc'),
        icon: {
            foreground: colors.red,
            src: 'editor-ul',
        },
        category: 'rc',
        attributes: {
            categoryIds: {
                type: 'array',
                default: []
            }
        },
        edit,
        save: () => {} 
    })
}
