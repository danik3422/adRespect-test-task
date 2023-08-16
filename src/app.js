//Creating a slider
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '#right',
		prevEl: '#left',
	},
})

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

//Show/Hide Go to Top btn
const scrollToTopBtn = document.getElementById('scrollToTopBtn')

window.addEventListener('scroll', () => {
	if (window.scrollY > 200) {
		scrollToTopBtn.classList.remove('hidden')
	} else {
		scrollToTopBtn.classList.add('hidden')
	}
})

//Go to Top
scrollToTopBtn.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' })
})
