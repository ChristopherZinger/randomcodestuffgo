const { InnerBlocks } = wp.blockEditor

const TEMPLATE = [['core/columns']]
const ALLOWED_BLOCKS = ['core/columns']

export default () => {
    return <InnerBlocks template={TEMPLATE} allowedBlocks={ALLOWED_BLOCKS} templateLock={false} />
}
