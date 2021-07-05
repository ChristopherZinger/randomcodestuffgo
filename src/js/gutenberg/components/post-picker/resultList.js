const { withSelect } = wp.data

const applyWithSelect = withSelect((select, { postType, searchQuery, args }) => ({
    searchResult: select('core').getEntityRecords('postType', postType || 'post', {
        _embed: 1,
        search: searchQuery || '',
        ...args,
    }),
}))

const ResultList = ({ searchResult, onSelect }) => {
    return (
        <ul>
            {searchResult &&
                searchResult.map((post) => (
                    <li onClick={() => onSelect(post)}>{post.title?.rendered}</li>
                ))}
        </ul>
    )
}

export default applyWithSelect(ResultList)
