import edit from './edit'
import { colors } from '../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

export default () => {
    registerBlockType('rc/next-prev-btn', {
        title: __('Next / Previous Button', 'rc'),
        description: __('Next / Previous Button', 'rc'),
        icon: {
            foreground: colors.red,
            src: 'controls-forward',
        },
        category: 'rc',
        parent: ['rc/series-navigation-buttons'],
        attributes: {
			isForward: {
				type: 'boolean',
				default: true
			},
			postIdToLinkTo: {
				type: 'string'
			},
			text: {
				type: 'string',
				default: 'go forward'
			},
			overridePostTitle: {
				type: 'string'
			}
		},
        edit,
        save: () => {},
    })
}