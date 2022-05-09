const script = document.createElement("script")
script.innerHTML = "console.log = console.clear = _ => {}"

new MutationObserver(mutations =>
	mutations.forEach(mutation =>
		mutation.addedNodes.forEach(node => {
			if (node.tagName == "HEAD")
				node.appendChild(script)
		})))
	.observe(document, {childList: true, subtree: true})
