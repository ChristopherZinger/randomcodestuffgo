import slugify from "slugify"

const { InnerBlocks, InspectorControls } = wp.blockEditor
const { TextControl, PanelBody } = wp.components

const TEMPLATE = [
    ['core/heading', { level: 6, className: 'rc-section__title' }],
    ['core/paragraph'],
]

export default ({attributes: {sectionName, sectionSlug}, setAttributes}) => {
	const handleSlugChange = (sectionName) => {
		setAttributes({
			sectionName,
			sectionSlug: slugify(sectionName, {lower: true})
		})
	}

    return (
		<>
			<InspectorControls>
				<PanelBody>
					<TextControl
						label='Section Name'
						value={sectionName}
						onChange={handleSlugChange}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks template={TEMPLATE}/>
		</>
	)
}
