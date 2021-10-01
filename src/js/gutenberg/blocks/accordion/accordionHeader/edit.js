const { InnerBlocks } = wp.blockEditor

const TEMPLATE = [
	['core/heading', {level: 6}]
]

export default () => {
    return (
		<div className="accordion__header">
			<InnerBlocks template={TEMPLATE} templateLock={false}  />
		</div>
    )
}
