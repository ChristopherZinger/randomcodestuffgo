import { CategoryPicker } from '../../components/post-picker/categoryPicker'

const { PanelBody, ToggleControl } = wp.components
const { __ } = wp.i18n
const { InspectorControls, RichText, URLInput } = wp.blockEditor

const TEMPLATE = [['rc/post-card'], ['rc/post-card'], ['rc/post-card'], ['rc/post-card']]
const ALLOWED_BLOCKS = ['rc/post-card']

export default ({ setAttributes, attributes: { title, link, categories } }) => {
    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Link Settings', 'rc')}>
                    <URLInput
                        label={__('Link Url', 'rc')}
                        value={link.url}
                        onChange={(url) => setAttributes({ link: { ...link, url } })}
                    />
                    <ToggleControl
                        label={__('Open in new tab', 'rc')}
                        checked={link.openInNewTab}
                        help={
                            link.openInNewTab
                                ? __('Will open in new tab.', 'rc')
                                : __('Will NOT open in new tab.', 'rc')
                        }
                        onChange={() =>
                            setAttributes({ link: { ...link, openInNewTab: !link.openInNewTab } })
                        }
                    />
                </PanelBody>
                <PanelBody title={__('Select Categories', 'rc')}>
                    <CategoryPicker
                        onSave={(categories) => setAttributes({ categories })}
                        savedCategories={categories}
                        max={4}
                    />
                </PanelBody>
            </InspectorControls>

            <div class='row-of-series'>
                <div class='row-of-series__header'>
                    <RichText
                        as='h6'
                        label={__('Title', 'rc')}
                        value={title}
                        onChange={(title) => setAttributes({ title })}
                        placeholder={__('Title', 'rc')}
                    />
                    <RichText
                        as='h6'
                        label={__('link', 'rc')}
                        value={link.text}
                        onChange={(text) => setAttributes({ link: { ...link, text } })}
                        placeholder={__('Link', 'rc')}
                    />
                </div>

                <div class='row-of-series__body'>
                    {categories.map((category) => (
                        <CategoryCard category={category} />
                    ))}
                </div>
            </div>
        </>
    )
}

const CategoryCard = ({ category }) => {
    return (
        <div className='post-card'>
            <h4 className='post-card__header h4'>{category.name}</h4>
            <div className='post-card__excerpt'>
                {category.description || __("This category does't have a description yet.")}
            </div>
        </div>
    )
}
