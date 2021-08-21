const { InnerBlocks } = wp.blockEditor

const TEMPLATE = [
	['rc/accordion'],
	['rc/accordion'],
	['rc/accordion'],
]

export default () => {
    return (
		<div className="accordion-list">
			<InnerBlocks template={TEMPLATE} templateLock={false}  />
		</div>
    )
}
