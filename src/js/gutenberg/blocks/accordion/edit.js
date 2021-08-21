const { InnerBlocks } = wp.blockEditor

const TEMPLATE = [
	['core/group', {className: 'accordion__header'},[
		['rc/accordion-header'],
	]],
	['core/group', {className: 'accordion__content'},[
		['rc/accordion-content']
	]],
]

export default () => {
    return (
		<div className="accordion">
			<InnerBlocks template={TEMPLATE} templateLock='all'/>
		</div>
    )
}
