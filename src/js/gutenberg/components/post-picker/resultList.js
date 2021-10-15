const { withSelect } = wp.data

const applyWithSelect = withSelect((select, { postType, searchQuery, exclude }) => ({
    searchResult: select('core').getEntityRecords('postType', postType || 'post', {
        _embed: 1,
        search: searchQuery,
        exclude,
    }),
}))

const ResultList = ({ searchResult, onSelect }) => {
    return (
        <ul clasName='result-list'>
            {searchResult &&
                searchResult.map((post) => (
                    <li className='result-list__item' onClick={() => onSelect(post)}>
                        {post.title?.rendered}
                    </li>
                ))}
        </ul>
    )
}

export default applyWithSelect(ResultList)
