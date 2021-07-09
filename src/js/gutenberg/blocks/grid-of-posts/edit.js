import { PostPicker } from '../../components/post-picker/postPicker'

const { Fragment } = wp.element
const { InnerBlocks } = wp.blockEditor

const ALLOWEDBLOKCS = ['rc/post-card']
const TEMPLATE = [['rc/section-header'], ['rc/post-card']]

export default () => {
    return <InnerBlocks template={TEMPLATE} allowedBlocks={ALLOWEDBLOKCS} />
}
