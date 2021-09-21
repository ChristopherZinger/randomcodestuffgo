import edit from './edit'
import {colors } from '../../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.blockEditor

export default () => {
    registerBlockType('rc/special-list-item', {
        title: __('Accordion List Item', 'rc'),
        icon: {
            foreground: colors.red,
            src: 'dashicons-saved',
        },
        category: 'rc',
		parent: ['rc/special-list'],
        attributes: {},
        edit,
        save: () => <InnerBlocks.Content />
    })
}
