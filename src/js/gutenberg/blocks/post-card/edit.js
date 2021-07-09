import { PostPicker } from '../../components/post-picker/postPicker'

const { Fragment, useState } = wp.element
const { Button, ToolbarItem } = wp.components
const { BlockControls } = wp.blockEditor

export default ({ attributes: { post }, setAttributes }) => {
    const [isPostPickerOpen, setIsPostPickerOpen] = useState(false)

    const handlePostSelect = (post) => {
        if (!post || typeof post.id !== 'number') {
            return
        }
        setAttributes({ post })
    }

    return (
        <Fragment>
            <BlockControls>
                <ToolbarItem as={Button} onClick={() => setIsPostPickerOpen(true)}>
                    Pick Post
                </ToolbarItem>
            </BlockControls>

            <div className={`post-card ${!post ? 'post-card--empty' : ''}`}>
                {!post && (
                    <div className='is-style-secondary'>
                        <button
                            className='wp-block-button__link'
                            onClick={() => setIsPostPickerOpen(true)}
                        >
                            Pick Post
                        </button>
                    </div>
                )}

                {post && (
                    <Fragment>
                        <h3>{post.title?.rendered}</h3>
                        <div>
                            {post.tags?.map((tagId) => (
                                <a href='#' className='rc-tag'>
                                    {tagId}
                                </a>
                            ))}
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered }} />
                    </Fragment>
                )}

                <PostPicker
                    onSelect={(p) => handlePostSelect(p)}
                    close={() => setIsPostPickerOpen(false)}
                    isOpen={isPostPickerOpen}
                />
            </div>
        </Fragment>
    )
}
