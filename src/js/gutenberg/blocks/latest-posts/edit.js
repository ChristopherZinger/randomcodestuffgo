import { CategoryPicker } from '../../components/post-picker/categoryPicker'

const { PanelBody, ToggleControl } = wp.components
const { __ } = wp.i18n
const { InspectorControls, RichText, URLInput } = wp.blockEditor
const { withSelect } = wp.data

export default withSelect((select) => {
    const posts = select('core').getEntityRecords('postType', 'post', {
        per_page: 6,
    })
    return { posts }
})(({ posts, setAttributes, attributes: { title, link } }) => {
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
            </InspectorControls>

            <div className='home-section latest-posts'>
                <header className='home-section__header latest-posts__header'>
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
                </header>
                <div className='home-section__body latest-posts__body'>
                    {posts &&
                        posts.map((post) => (
                            <div className='post-card'>
                                <header className='post-card__header'>{post.title.raw}</header>
                                <div className='post-card__excerpt'>{post.excerpt.raw}</div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
})
