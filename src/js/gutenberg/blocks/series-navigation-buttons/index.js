import edit from './edit'
import { colors } from '../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.blockEditor

export default () => {
    registerBlockType('rc/series-navigation-buttons', {
        title: __('Series Navigation Buttons', 'rc'),
        icon: {
            foreground: colors.red,
            src: 'controls-forward',
        },
        category: 'rc',
        attributes: {
			hideNext: {
				type: 'boolean',
				default: false,
			},
			hidePrevious: {
				type: 'boolean',
				default: false,
			}
        },
        edit,
        save: () => <InnerBlocks.Content /> 
    })
}
