const { PanelBody, ToggleControl } = wp.components
const { __ } = wp.i18n
const { InspectorControls, InnerBlocks} = wp.blockEditor

const TEMPLATE = [
	['rc/next-prev-btn'],
	['rc/next-prev-btn'],
]

const ALLOWED_BLOCKS = ['rc/next-prev-btn']

export default ({ 
	setAttributes, 
	attributes: {
		hideNext,
		hidePrevious	
}}) => {
    return (
		<>
			<InspectorControls>
				<PanelBody>
					<ToggleControl 
						label={__('Hide Next Button', 'rc')}
						checked={hideNext} 
						onChange={() => setAttributes({hideNext: !hideNext})}
					/>
					<ToggleControl 
						label={__('Hide Previous Button', 'rc')}
						checked={hidePrevious} 
						onChange={() => setAttributes({hidePrevious: !hidePrevious})}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				template={TEMPLATE}	
				allowed_blocks={ALLOWED_BLOCKS}
				templateLock='all'
			/>
		</>
    )
}

