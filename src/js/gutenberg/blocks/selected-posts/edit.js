import { PostPicker } from '../../components/post-picker/postPicker'

const { PanelBody, ToggleControl, Button } = wp.components
const { useState } = wp.element
const { __ } = wp.i18n
const { InspectorControls, RichText, URLInput } = wp.blockEditor
const { withSelect } = wp.data

export default ({ setAttributes, attributes: { title, link, isTypePost, ids = [] } }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        if (ids.length < 4) {
            setIsModalOpen(true)
        } else {
            console.warn('You reached maximum.')
        }
    }

    const handleAddPost = (id) => {
        if (ids.includes(id)) {
            console.warn('This item is already on the list')
            return
        }
        setAttributes({ ids: [...ids, id] })
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Post or Pages', 'rc')}>
                    <ToggleControl
                        label={__('Choose between posts or pages', 'rc')}
                        checked={isTypePost}
                        help={isTypePost ? __('Display POSTS.', 'rc') : __('Display PAGES.', 'rc')}
                        onChange={() => {
                            setAttributes({ isTypePost: !isTypePost, ids: [] })
                        }}
                    />
                </PanelBody>

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
                    <Button className='rc-components-button' onClick={() => openModal()}>
                        {__('Add a Post or Page', 'rc')}
                    </Button>
                    <PostPicker
                        onSelect={({ id }) => handleAddPost(id)}
                        isOpen={isModalOpen}
                        close={() => setIsModalOpen(false)}
                        postType={isTypePost ? 'post' : 'page'}
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
                    <div className='grid-x grid-margin-x'>
                        {ids &&
                            ids.map((id) => (
                                <div className='cell large-3'>
                                    <Card
                                        id={id}
                                        postType={isTypePost ? 'post' : 'page'}
                                        remove={() =>
                                            setAttributes({ ids: ids.filter((_id) => id !== _id) })
                                        }
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

const Card = withSelect((select, { id, postType }) => {
    const posts = select('core').getEntityRecords('postType', postType || 'post', {
        include: [id],
        per_page: 1,
    })

    return Array.isArray(posts) ? { post: posts[0] } : { post: [] }
})(({ post, remove }) => {
    return (
        <div className='post-card'>
            {post ? (
                <>
                    <div className='post-card__header'>{post.title?.raw || 'no title'}</div>
                    <div className='post-card__body'>
                        {post.excerpt?.raw || post.description || 'Description is missing'}
                    </div>
                </>
            ) : (
                'Incorrect id'
            )}
            <button
                className='rc-components-button rc-components-button--warn'
                onClick={() => remove(post.id)}
            >
                remove
            </button>
        </div>
    )
})
