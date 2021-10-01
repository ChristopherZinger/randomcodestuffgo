import { getPostsByCategoryId } from '../API/getPostsByCategoryId'

export default class PageSeries {
	init () {
		this.input = document.querySelector('.content-category #s')
		this.inputValue = ''
		this.timer
		this.categoryId = this.getCategoryId()

		if (!this.input|| !this.categoryId) return

		this.updateList()
		this.handleInput()
	}

	getCategoryId () {
		const catContainer = document.querySelector('.content-category')
		if(! catContainer) return
		return catContainer.getAttribute('data-category-id')
	}

	constructor () {
		this.listControler = new PostListControler()
		this.init()
	}

	controlTimer () {
		if (this.timer) {
			clearTimeout(this.timer)
			this.timer = null;
		}

		this.setTimer()
	}

	setTimer () {
		this.timer = setTimeout(async () => {
			await this.updateList()
		}, 500)
	}

	async updateList () {
		const posts = await this.makeAPICall()
		this.listControler.clearList()
		this.listControler.addItemsToList(posts)
	}

	makeAPICall () {
		return getPostsByCategoryId(
			this.inputValue,
			this.categoryId
			)
	}

	handleInput () {
		this.input.addEventListener('input', ({target: {value}}) => {
			this.inputValue = value
			this.updateList()
		})
	}
}

function PostListControler () {
	const { createCard } = new PostCardCreator()
	const listContainer = document.querySelector('.content-category__list-of-posts')

	function addItemsToList (items=[]) {
		items.forEach(item => {
			const card = createCard(item.title?.rendered, item.excerpt?.rendered, item.link)
			if (card instanceof HTMLElement) {
				listContainer.appendChild(card)
			}
		});
	}

	function clearList () {
		while (listContainer.firstChild) {
			listContainer.removeChild(listContainer.firstChild)
		}
	}

	return {
		addItemsToList,
		clearList
	}
}

function PostCardCreator () {
	function createCard (title, excerpt , link='javascript:;') {
		if (!title) return

		const cardNode = createContainer()
		const linkNode = createLink(link)
		const titleNode = createTitle(title)
		const excerptNode = createExcerpt(excerpt || 'This item don\'t have a description.')

		linkNode.appendChild(titleNode)
		linkNode.appendChild(excerptNode)
		cardNode.appendChild(linkNode)

		return cardNode
	}

	function createContainer () {
		return createElement(
			'div',
			'',
			{
				class: 'content-category__card-container card'
			}
		)
	}

	function createTitle (title) {
		return createElement(
			'h6',
			removeTags(title),
			{
				class: 'content-category__card-title',
			},
		)
	}

	function createExcerpt (excerpt) {
		return createElement(
			'p',
			removeTags(excerpt),
			{
				class: 'content-category__card-excerpt',
			},
		)
	}

	function createLink (link) {
		return createElement(
			'a',
			'',
			{
				class: 'content-category__card-link',
				href: link
			},
		)
	}
	
	/**
	 * 
	 * @param {string} tagType 
	 * @param {{attrName: attrValue}} attributes 
	 * @param {string} text 
	 */
	function createElement (tagType, text='', attributes=[]) {
		if (!tagType) return

		const el = document.createElement(tagType)
		el.innerHTML = text

		for (const attr in attributes) {
			el.setAttribute(attr, attributes[attr])
		}

		return el
	}

	function removeTags (str) {
		return str.replace( /(<([^>]+)>)/ig, '' )
	}

	return {
		createCard
	}
}