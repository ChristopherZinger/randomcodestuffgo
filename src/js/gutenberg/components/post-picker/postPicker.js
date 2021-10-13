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

    return (
        <>
            {isOpen && (
                <Modal title={__('Post Picker', 'rc')} onRequestClose={close}>
                    <div>
                        <TextControl
                            label={__('Find posts', 'rc')}
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
