'use strict';

const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.testimonial');
const dotsContainer = document.querySelector('.carousel-dots');
const ratingStarsEl = document.querySelectorAll('.testimonial__rating');

// Stars
ratingStarsEl.forEach(starEl => {
	for (let i = 0; i < 5; i++) {
		let star = document.createElement('i');
		star.className = 'fa-solid fa-star';
		starEl.appendChild(star);
	}
});

//  Carousel
let index = 0;

// Create dots dynamically
items.forEach((_, i) => {
	const dot = document.createElement('button');
	if (i === 0) dot.classList.add('active');
	dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('button');

function updateCarousel() {
	track.style.transform = `translateX(-${index * 100}%)`;

	// update dots
	dots.forEach(dot => dot.classList.remove('active'));
	dots[index].classList.add('active');
}

function moveCarousel() {
	index = (index + 1) % items.length;
	updateCarousel();
}

dots.forEach((dot, i) => {
	dot.addEventListener('click', () => {
		index = i;
		updateCarousel();
	});
});

// autoplay every 3s
setInterval(moveCarousel, 5000);
