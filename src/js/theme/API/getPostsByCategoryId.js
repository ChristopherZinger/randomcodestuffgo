export const getPostsByCategoryId = async (keyword, categories, per_page = 10, page = 1) => {
    const params = {
        search: keyword,
        _fields: 'id,title,date,excerpt,link,tags',
        categories,
        per_page,
        page,
    }
    const decodedParams = '?' + new URLSearchParams(params).toString()
    const url = '/wp-json/wp/v2/posts' + decodedParams

    try {
        const result = await fetch(url, { method: 'GET' })
        console.log('fetch: ', result)
        return result
    } catch (err) {
        console.warn(err)
        return []
    }
}
