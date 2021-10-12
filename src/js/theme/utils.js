function traversParentNodes(node, callback = () => false) {
    if (!(node instanceof HTMLElement)) return
    let parent = node

    while (parent) {
        const exit = callback(parent)
        if (exit) {
            return parent
        }
        parent = parent.parentNode
    }
}

function init(callback) {
    document.addEventListener('DOMContentLoaded', () => {
        callback()
    })
}

export { traversParentNodes, init }
