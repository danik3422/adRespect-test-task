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
const mobileLink = document.querySelectorAll('.mobile-link')

btn.addEventListener('click', () => {
	menu.classList.toggle('hidden')
})
mobileLink.forEach((link) => {
	link.addEventListener('click', () => {
		menu.classList.toggle('hidden')
	})
})

//Album

const masonryImages = document.querySelectorAll('.masonry-item')
const popup = document.getElementById('popup')
const imgPopup = document.getElementById('popup-img')
const btnClose = document.getElementById('close-btn')
const popLeft = document.getElementById('pop-left')
const popRight = document.getElementById('pop-right')
let currentIndex = 0
let startX = 0
let endX = 0

masonryImages.forEach((img, index) => {
	img.addEventListener('click', () => {
		const imgUrl = img.children[0].src
		imgPopup.src = imgUrl
		popup.style.display = 'flex'
		document.body.style.overflowY = 'hidden'
		currentIndex = index
	})
})

const showImage = (index) => {
	if (index >= 0 && index < masonryImages.length) {
		const imgUrl = masonryImages[index].children[0].src
		imgPopup.src = imgUrl
		currentIndex = index
	}
}

const showNextImage = () => {
	showImage((currentIndex + 1) % masonryImages.length)
}

const showPreviousImage = () => {
	showImage((currentIndex - 1 + masonryImages.length) % masonryImages.length)
}

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

popLeft.addEventListener('click', () => {
	showPreviousImage()
})

popRight.addEventListener('click', () => {
	showNextImage()
})

popup.addEventListener('touchstart', (e) => {
	startX = e.touches[0].clientX
})

popup.addEventListener('touchend', (e) => {
	endX = e.changedTouches[0].clientX
	handleSwipe()
})

//Swipe for mobile
const handleSwipe = () => {
	const threshold = 50 // Minimum distance for a swipe

	if (endX < startX - threshold) {
		showNextImage()
	} else if (endX > startX + threshold) {
		showPreviousImage()
	}
}

document.addEventListener('keydown', (e) => {
	if (e.key === 'ArrowRight') {
		showNextImage()
	} else if (e.key === 'ArrowLeft') {
		showPreviousImage()
	}
})

//Scroll animation
window.addEventListener('scroll', () => {
	const reveal = document.querySelectorAll('.reveal')
	for (let i = 0; i < reveal.length; i++) {
		const windowHeigth = window.innerHeight
		const revealTop = reveal[i].getBoundingClientRect().top
		const revealPoint = 50

		if (revealTop < windowHeigth - revealPoint) {
			reveal[i].classList.add('active')
		} else {
			reveal[i].classList.remove('active')
		}
	}
})

//Project collapse
const collapseBtn = document.getElementById('collapse')
const gradient = document.querySelector('.gradient')

collapseBtn.addEventListener('click', () => {
	gradient.style.display = 'none'
})
