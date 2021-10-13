import { PostPicker } from '../../components/post-picker/postPicker'

const { __ } = wp.i18n
const { withSelect } = wp.data
const { PanelBody, Button } = wp.components
const { useState } = wp.element
const { InspectorControls } = wp.blockEditor

export default withSelect((select, { attributes: { ids } }) => {
    const posts = select('core').getEntityRecords('postType', 'post', {
        include: ids,
    })

    return {
        posts,
    }
})(({ attributes: { ids }, setAttributes, posts }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleAddPost = (post) => {
        if (!ids.includes(post.id)) {
            setAttributes({ ids: [...ids, post.id] })
        } else {
            console.warn('This post is already selected.')
        }
    }

    const postsIsNotEmptyArray = Array.isArray(posts) && posts.length > 0

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Select Categories', 'rc')}>
                    <Button className='rc-components-button' onClick={() => setIsModalOpen(true)}>
                        {__('Add Post', 'rc')}
                    </Button>
                    <PostPicker
                        onSelect={handleAddPost}
                        close={() => setIsModalOpen(false)}
                        isOpen={isModalOpen}
                        idsToExclude={ids}
                    />
                </PanelBody>
            </InspectorControls>
            <div>
                {postsIsNotEmptyArray ? (
                    <>
                        {posts.map((post) => (
                            <Card
                                key={post.id}
                                post={post}
                                remove={(id) =>
                                    setAttributes({ ids: ids.filter((_id) => _id !== id) })
                                }
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <p style={{ color: 'coral' }}>*** There are no posts selected yet.</p>
                        <Button
                            className='rc-components-button'
                            onClick={() => setIsModalOpen(true)}
                        >
                            {__('Add Post', 'rc')}
                        </Button>
                    </>
                )}
            </div>
        </>
    )
})

const Card = ({ post, remove }) => (
    <div className='post-card'>
        <header className='post-card__header'>{post.title.raw}</header>
        <div className='post-card__body'>{post.excerpt.raw}</div>
        <Button
            className={'rc-components-button rc-components-button--warn'}
            onClick={() => remove(post.id)}
        >
            {__('Remove', 'rc')}
        </Button>
    </div>
)
