
import axios from 'axios'

export const getPostsByCategoryId = async (keyword, categories, per_page=10, page=1) => {
	try{
		const { data } = await axios.get('/wp-json/wp/v2/posts', {
			params: {
				search: keyword,
				'_fields' : 'id,title,date,excerpt,link,tags',
				categories,
				per_page,
				page
			}
		})
		return data 
	} catch (err) {
		console.warn(err)
		return []
	}
}