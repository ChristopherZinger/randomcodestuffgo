import { PostPicker } from '../../components/post-picker/postPicker'

const { useState } = wp.element
const { Button, ToolbarItem, TextControl, PanelBody, ToggleControl } = wp.components
const { RichText, InspectorControls } = wp.blockEditor
const { __ } = wp.i18n
const { withSelect } = wp.data

export default withSelect((select, { attributes: { postIdToLinkTo } }) => {
    if (!postIdToLinkTo) {
        return { post: null }
    }

    const posts =
        select('core').getEntityRecords('postType', 'post', {
            include: [postIdToLinkTo],
        }) || []

    return {
        post: posts[0],
    }
})(
    ({
        attributes: { text, postIdToLinkTo, isForward, overridePostTitle },
        setAttributes,
        post,
    }) => {
        const [isPostPickerOpen, setIsPostPickerOpen] = useState(false)

        const handlePostSelect = (post) => {
            if (!post) {
                return
            }

            setAttributes({ postIdToLinkTo: post.id.toString() })
        }

        return (
            <>
                <PostPicker
                    onSelect={handlePostSelect}
                    close={() => setIsPostPickerOpen(false)}
                    isOpen={isPostPickerOpen}
                />
                <InspectorControls>
                    <PanelBody label={__('Pick a post', 'rc')}>
                        <ToolbarItem
                            as={Button}
                            onClick={() => setIsPostPickerOpen(true)}
                            className='post-picker__button'
                        >
                            Pick Post
                        </ToolbarItem>
                    </PanelBody>
                    <PanelBody label={__('Override Post Title', 'rc')}>
                        <TextControl
                            label={__('Override Post Title', 'rc')}
                            value={overridePostTitle}
                            onChange={(overridePostTitle) => setAttributes({ overridePostTitle })}
                        />
                    </PanelBody>
                    <PanelBody label={__('Is Forward')}>
                        <ToggleControl
                            label={__('Button points forwards.', 'rc')}
                            checked={isForward}
                            onChange={() => setAttributes({ isForward: !isForward })}
                        />
                    </PanelBody>
                </InspectorControls>

                <div className='next-prev-btn'>
                    <div className='next-prev-btn__content'>
                        <RichText
                            label={__('Button text', 'rc')}
                            value={text}
                            onChange={(text) => setAttributes({ text })}
                            placeholder={__('Add Text', 'rc')}
                        />
                        <h4>{overridePostTitle || post?.title?.rendered || 'Post Not Selected'}</h4>
                    </div>
                </div>
            </>
        )
    }
)
