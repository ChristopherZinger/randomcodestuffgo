const { InnerBlocks } = wp.blockEditor

const TEMPLATE = [['core/heading', { level: 6 }]]

export default () => {
    return <InnerBlocks template={TEMPLATE} templateLock={false} />
}
