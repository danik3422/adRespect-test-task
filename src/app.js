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

//Mobile Menu
const btn = document.querySelector('button.mobile-menu-button')
const menu = document.querySelector('.mobile-menu')
btn.addEventListener('click', () => {
	menu.classList.toggle('hidden')
})

//Album

const masonryImages = document.querySelectorAll('.masonry-item')
const popup = document.getElementById('popup')
const imgPopup = document.getElementById('popup-img')
const btnClose = document.getElementById('close-btn')

masonryImages.forEach((img) => {
	img.addEventListener('click', () => {
		const imgUrl = img.children[0].src
		console.log(imgUrl)
		imgPopup.src = imgUrl
		popup.style.display = 'flex'
		document.body.style.overflowY = 'hidden'
	})
})

btnClose.addEventListener('click', () => {
	popup.style.display = 'none'
	document.body.style.overflowY = 'scroll'
})

popup.addEventListener('click', (e) => {
	if (e.target === popup) {
		popup.style.display = 'none'
		document.body.style.overflowY = 'scroll'
	}
})
