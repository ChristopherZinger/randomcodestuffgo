const { InnerBlocks } = wp.blockEditor

const TEMPLATE = [
	['rc/special-list']
]

export default () => {
    return (
		<div className="accordion__content">
			<InnerBlocks template={TEMPLATE} templateLock={false} />
		</div>
    )
}
