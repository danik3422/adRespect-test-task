window.onload = () => {
	const grid = document.querySelector('.masonry')

	const masonry = new Masonry(grid, {
		itemSelector: '.masonry-item',
		gutter: 40,
		horizontalOrder: true,
		fitWidth: true,
	})
}

//Show search
const searchIcon = document.getElementById('search-icon')
const searchInput = document.getElementById('search-input')

searchIcon.addEventListener('click', () => {
	searchInput.classList.toggle('hidden')
	searchInput.focus()
})
