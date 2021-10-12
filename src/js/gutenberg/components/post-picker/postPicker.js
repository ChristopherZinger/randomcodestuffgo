import ResultList from './resultList'

const { __ } = wp.i18n
const { Modal, TextControl } = wp.components
const { Fragment, useState } = wp.element

export const PostPicker = ({ onSelect, isOpen, close, postType = 'post' }) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSelectPost = (post) => {
        onSelect(post)
        close()
    }

    return (
        <Fragment>
            {isOpen && (
                <Modal title={__('Post Picker', 'rc')} onRequeseClose={close}>
                    <div>
                        <h4>Post Picker</h4>
                        <TextControl
                            label={__('Find posts', 'rc')}
                            value={searchQuery}
                            onChange={(v) => setSearchQuery(v)}
                        />
                        <ResultList
                            searchQuery={searchQuery}
                            onSelect={handleSelectPost}
                            postType={postType}
                        />
                    </div>
                </Modal>
            )}
        </Fragment>
    )
}
