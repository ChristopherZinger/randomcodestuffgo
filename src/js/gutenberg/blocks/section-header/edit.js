import { PostPicker } from '../../components/post-picker/postPicker'

const { InnerBlocks } = wp.blockEditor

const ALLOWEDBLOKCS = ['rc/post-card']
const TEMPLATE = [
    ['core/heading', { level: 6, className: 'section-header__header' }],
    ['core/button', { className: 'section-header__button' }],
]

export default () => {
    return <InnerBlocks template={TEMPLATE} allowedBlocks={ALLOWEDBLOKCS} />
}
