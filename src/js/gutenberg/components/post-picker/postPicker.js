import ResultList from './resultList'

const { __ } = wp.i18n
const { Modal, TextControl } = wp.components
const { useState } = wp.element

export const PostPicker = ({ onSelect, isOpen, close, postType = 'post', idsToExclude = [] }) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSelectPost = (post) => {
        onSelect(post)
        close()
    }

    const isTypePost = postType === 'post'

    return (
        <>
            {isOpen && (
                <Modal
                    title={isTypePost ? __('Post Picker', 'rc') : __('Page Picker', 'rc')}
                    onRequestClose={close}
                >
                    <div>
                        <TextControl
                            label={isTypePost ? __('Find Posts', 'rc') : __('Find Pages', 'rc')}
                            value={searchQuery}
                            onChange={(v) => setSearchQuery(v)}
                        />
                        <ResultList
                            searchQuery={searchQuery}
                            onSelect={handleSelectPost}
                            postType={postType}
                            exclude={idsToExclude}
                        />
                    </div>
                </Modal>
            )}
        </>
    )
}
