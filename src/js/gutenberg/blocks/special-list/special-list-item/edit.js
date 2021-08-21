const { InnerBlocks } = wp.blockEditor

const TEMPLATE = [
	['core/group', {className: 'special-list-item'}, 
		[
			['core/group', {className: 'special-list-item__bullet'}, 
				[
					['core/heading', {level: 6}]
				],
			],
			['core/group', {className: 'special-list-item__content'}, 
				[
					['core/paragraph']
				],
			],
		]
	]
]

export default () => {
    return (
		<div className='special-list-item'>
			<InnerBlocks template={TEMPLATE}   />
		</div>
    )
}
