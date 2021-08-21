const { InnerBlocks } = wp.blockEditor

const TEMPLATE = [
	['rc/special-list-item'],
	['rc/special-list-item']
]

export default () => {
    return (
		<div className='special-list'>
			<InnerBlocks template={TEMPLATE}   />
		</div>
    )
}
