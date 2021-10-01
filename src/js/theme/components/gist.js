
export default class Gist {
	init () {
		const gists = Array.from(document.querySelectorAll('.gist-meta'))

		if (gists.length > 0) {
			gists.forEach(gist => this.clearGistMeta(gist))
		}
	}

	clearGistMeta (gist) {
		const inner = gist.innerHTML.split('hosted with ❤ by ').join('')
		gist.innerHTML = inner
		const x = gist.querySelector('a:last-child')
		gist.removeChild(x)
	}

	constructor () {
		this.init()
	}
}