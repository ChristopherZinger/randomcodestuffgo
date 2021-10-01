import { PostPicker } from '../../components/post-picker/postPicker'

const { Fragment, useState } = wp.element
const { InnerBlocks } = wp.blockEditor

const ALLOWEDBLOKCS = ['rc/post-card']
const TEMPLATE = [['core/heading'], ['rc/post-card']]

export default () => {
    return (
        <Fragment>
            <InnerBlocks template={TEMPLATE} allowedBlocks={ALLOWEDBLOKCS} />
        </Fragment>
    )
}
