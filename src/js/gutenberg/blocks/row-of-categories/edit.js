import { CategoryPicker } from '../../components/post-picker/categoryPicker'

const { PanelBody, ToggleControl } = wp.components
const { __ } = wp.i18n
const { InspectorControls, RichText, URLInput } = wp.blockEditor
const { withSelect } = wp.data

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

            <div className='row-of-categories home-section'>
                <div className='row-of-categories__header home-section__header'>
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

                <div className='row-of-categories__body'>
                    {categories.map((category) => (
                        <CategoryRow category={category} />
                    ))}
                </div>
            </div>
        </>
    )
}

const CategoryRow = withSelect((select, { category }) => {
    const posts = select('core').getEntityRecords('postType', 'post', {
        categories: category.id,
        per_page: 3,
    })
    return { posts }
})(({ category, posts }) => {
    return (
        <div className='row-of-categories__row grid-x grid-margin-x'>
            <div className='cell large-3'>
                <h3 className='post-card__header'>{category.name}</h3>
            </div>
            <div className='cell large-9'>
                <div className='grid-x grid-margin-x'>
                    {posts &&
                        posts.map((post) => (
                            <div className='cell medium-6 large-4'>
                                <div className='post-card'>
                                    <header className='post-card__header'>{post.title.raw}</header>
                                    <div className='post-card__body'>{post.excerpt.raw}</div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
})
