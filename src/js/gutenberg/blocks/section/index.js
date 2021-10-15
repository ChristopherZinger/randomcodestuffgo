import edit from './edit'
import { colors } from '../../settings'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.blockEditor

export default () => {
    registerBlockType('rc/section', {
        title: __('Section', 'rc'),
        description: __(
            'Section for About page. Each section will be displayed in side menu.',
            'rc'
        ),
        icon: {
            foreground: colors.red,
            src: 'editor-justify',
        },
        category: 'rc',
        attributes: {
            sectionName: {
                type: 'string',
            },
            sectionSlug: {
                type: 'string',
            },
        },
        edit,
        save: (props) => <InnerBlocks.Content />,
    })
}
