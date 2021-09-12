import { CategoryPicker } from "../../components/post-picker/categoryPicker"

const { Button, PanelBody, ToggleControl } = wp.components
const { withSelect } = wp.data
const { __ } = wp.i18n
const { InspectorControls } = wp.blockEditor

export default withSelect((select) => {
	const categories = select('core').getEntityRecords(
		'taxonomy', 
		'category',
	)
	return {
		categories
	}
})(({ 
	categories, 
	setAttributes, 
	attributes: {
		categoryIds, 
		hideExcerpt, 
		isHorizontal,
		showSearchForm
}}) => {
	const addCategories = (categories=[]) => {
		setAttributes({categoryIds: [
			...categoryIds,
			...categories
				.filter(cat => !categoryIds.includes(cat.id))
				.map(cat => cat.id)
		]})
	}

	const removeCategory = (catId) => {
		setAttributes({categoryIds: categoryIds.filter(id => id !== catId)})	
	}

	const getSelectedCategories = () => {
		if (!categories) return []
		return categories
			.filter(cat => categoryIds.includes(cat.id))
	}

    return (
		<>
			<InspectorControls>
				<PanelBody label={__('Add Section', 'rc')}>
					<CategoryPicker 
						onSave={(categories) => addCategories(categories)} 
					/>
				</PanelBody>
				<PanelBody>
					<ToggleControl 
						label={__('Hide Excerpt', 'rc')}
						checked={hideExcerpt} 
						onChange={() => setAttributes({hideExcerpt: !hideExcerpt})}
					/>
				</PanelBody>
				<PanelBody>
					<ToggleControl 
						label={__('Horizontal Display', 'rc')}
						help={__('Horizontal display will have a header with link', 'rc')}
						checked={isHorizontal} 
						onChange={() => setAttributes({isHorizontal: !isHorizontal})}
					/>
				</PanelBody>
				<PanelBody>
					<ToggleControl 
						label={__('Show Search Form', 'rc')}
						checked={showSearchForm} 
						onChange={() => setAttributes({showSearchForm: !showSearchForm})}
					/>
				</PanelBody>
			</InspectorControls>
			<div className='selectable-categories'>
				{
					getSelectedCategories()
						.map(cat => 
							<CategoryListItem 
								cat={cat} 
								remove={() => removeCategory(cat.id)}
								key={cat.id} 
							/>)
				}
				{ getSelectedCategories().length === 0 && (
					<div>{__('No categories was selected yet.', 'rc')}</div>
				)}
			</div>
		</>
    )
})

const CategoryListItem = ({cat, remove}) => 
	<div className='grid-x'>
		<div className='cell small-12 medium-8'>
			<h4>{cat.name}</h4>
			<p>{cat.description}</p>
		</div>
		<div class='cell small-12 medium-4'>
			<Button 
				onClick={ remove }	
			>{__('Remove', 'rc')}</Button>
		</div>
	</div>
