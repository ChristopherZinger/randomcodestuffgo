import { PostPicker } from '../../components/post-picker/postPicker'

const { __ } = wp.i18n
const { withSelect } = wp.data
const { PanelBody, Button, ToggleControl } = wp.components
const { useState } = wp.element
const { InspectorControls } = wp.blockEditor

export default withSelect((select, { attributes: { ids, isTypePost } }) => {
    const posts = select('core').getEntityRecords('postType', isTypePost ? 'post' : 'page', {
        include: ids,
    })

    return {
        posts,
    }
})(({ attributes: { ids, isTypePost, hideSearchBar }, setAttributes, posts }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleAddPost = (post) => {
        if (!ids.includes(post.id)) {
            setAttributes({ ids: [...ids, post.id] })
        } else {
            console.warn('This post is already selected.')
        }
    }

    const postsIsNotEmptyArray = Array.isArray(posts) && posts.length > 0
    const move = (postID, moveIndex) => {
        const arr = [...ids]
        const index = arr.indexOf(postID)
        if (index === -1) {
            return // item not on the list
        }
        arr.splice(index, 1)
        arr.splice(index + moveIndex, 0, postID)
        return arr
    }

    const moveup = (id) => {
        const ids = move(id, -1)
        setAttributes({ ids })
    }

    const movedown = (id) => {
        const ids = move(id, 1)
        setAttributes({ ids })
    }

    const remove = (id) => {
        setAttributes({ ids: ids.filter((_id) => _id !== id) })
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Posts or Pages')}>
                    <p>*** Changing from post to pages or around will clear the list of posts.</p>
                    <ToggleControl
                        label={__('Switch between pages and posts', 'rc')}
                        help={isTypePost ? __('Select: Post', 'rc') : __('Select: Page', 'rc')}
                        checked={isTypePost}
                        onChange={() => setAttributes({ isTypePost: !isTypePost, ids: [] })}
                    />
                </PanelBody>

                <PanelBody title={__('Hide the search bar', 'rc')}>
                    <ToggleControl
                        label={__('Hide the search bar', 'rc')}
                        help={
                            hideSearchBar ? __('Status: Hidden', 'rc') : __('Status: Visible', 'rc')
                        }
                        checked={hideSearchBar}
                        onChange={() => setAttributes({ hideSearchBar: !hideSearchBar })}
                    />
                </PanelBody>

                <PanelBody title={__('Pick Posts', 'rc')}>
                    <Button className='rc-components-button' onClick={() => setIsModalOpen(true)}>
                        {isTypePost ? __('Add Post', 'rc') : __('Add Page', 'rc')}
                    </Button>
                    <PostPicker
                        onSelect={handleAddPost}
                        close={() => setIsModalOpen(false)}
                        isOpen={isModalOpen}
                        idsToExclude={ids}
                        postType={isTypePost ? 'post' : 'page'}
                    />
                </PanelBody>
            </InspectorControls>
            <div>
                {postsIsNotEmptyArray ? (
                    <>
                        {posts.map((post, i) => {
                            const isFirst = i === 0
                            const isLast = i === posts.length - 1
                            return (
                                <Card
                                    key={post.id}
                                    post={post}
                                    remove={(id) => remove(id)}
                                    moveup={!isFirst && (() => moveup(post.id))}
                                    movedown={!isLast && (() => movedown(post.id))}
                                />
                            )
                        })}
                    </>
                ) : (
                    <>
                        <p style={{ color: 'coral' }}>*** There are no posts selected yet.</p>
                        <Button
                            className='rc-components-button'
                            onClick={() => setIsModalOpen(true)}
                        >
                            {isTypePost ? __('Add Post', 'rc') : __('Add Page', 'rc')}
                        </Button>
                    </>
                )}
            </div>
        </>
    )
})

const Card = ({ post, remove, moveup, movedown }) => (
    <div className='post-card'>
        <header className='post-card__header'>{post.title.raw}</header>
        <div className='post-card__body'>{post.excerpt.raw}</div>
        <Button
            className={'rc-components-button rc-components-button--warn'}
            onClick={() => remove(post.id)}
        >
            {__('Remove', 'rc')}
        </Button>

        {moveup && (
            <Button className={'rc-components-button'} onClick={moveup}>
                {__('Up', 'rc')}
            </Button>
        )}

        {movedown && (
            <Button className={'rc-components-button'} onClick={movedown}>
                {__('Down', 'rc')}
            </Button>
        )}
    </div>
)
