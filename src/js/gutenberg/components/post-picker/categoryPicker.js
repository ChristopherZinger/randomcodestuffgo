const { Modal, Button } = wp.components
const { useState } = wp.element
const { withSelect } = wp.data
const { __ } = wp.i18n

export const CategoryPicker = withSelect(select => {
	const categoriesOptions = select('core').getEntityRecords(
		'taxonomy', 
		'category'
	)

	return {
		categoriesOptions
	}
})(({categoriesOptions, onSave}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selected, setSelected] = useState([])
	const [keyword, setKeyword] = useState('')

	const isSelected = (cat) => {
		return selected.some(c => c.id === cat.id)
	}

	const toggleItemSelection = (cat) => {
		if (isSelected(cat)) {
			setSelected(selected.filter(c => c.id !== cat.id))
		} else {
			setSelected([...selected, cat])
		}
	}

	const save = () => {
		onSave(selected)
		setSelected([])
		setKeyword('')
		setIsOpen(false)
	}

    return (
		<div className=''>
		<Button onClick={() => setIsOpen(true)}>Select Categories</Button>
		{ isOpen && (
			<Modal
				title="Select Category"
				onRequestClose={ () => setIsOpen(false) }
			>
				<section>
					<header>
						<h4>{__('Filter Categories', 'rc')}</h4>
						<input 
							type='text' 
							value={keyword}
							onChange={({target}) => setKeyword(target.value.toUpperCase())}
						/>
					</header>
					{Array.isArray(categoriesOptions) && categoriesOptions
					.filter(cat => {
						if(!keyword) return true;
						return cat.name.toUpperCase().includes(keyword)
					})
					.map(cat => {
						return (
							<div 
								key={cat.id} 
								onClick={()=> toggleItemSelection(cat)}
								className={`category-picker__item ${isSelected(cat) && 'is-selected'}`}
							>{cat.name.toUpperCase()}</div>
						)
					})}
					<footer>
						<Button 
							onClick={save}
							className='category-picker__button' 
						>{__('Add', 'rc')}</Button>
					</footer>
				</section>
			</Modal>
		) }
		</div>
    )
})
