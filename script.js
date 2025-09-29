'use strict';

const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.testimonial');
const dotsContainer = document.querySelector('.carousel-dots');
const ratingStarsEl = document.querySelectorAll('.testimonial__rating');
const proPricingEl = document.getElementById('pro-pricing');
const enterprisePricingEl = document.getElementById('enterprise-pricing');
const faqHeaders = document.querySelectorAll('.faqs__header');

// Stars
ratingStarsEl.forEach(starEl => {
	for (let i = 0; i < 5; i++) {
		let star = document.createElement('i');
		star.className = 'fa-solid fa-star';
		starEl.appendChild(star);
	}
});

// BUTTON SWITCH

const proMonthlyPrice = 19;
const enterpriseMonthlyPrice = 49;
const discount = 0.2;

function getMonthlyDiscount(monthlyPrice, discount) {
	const annualCost = monthlyPrice * 12;
	const annualDiscount = annualCost * (1 - discount);
	return annualDiscount / 12;
}

const proDiscountPerMonth = getMonthlyDiscount(
	proMonthlyPrice,
	discount,
).toFixed();

const enterpriseDiscountPerMonth = getMonthlyDiscount(
	enterpriseMonthlyPrice,
	discount,
).toFixed();

const switchBtns = document.querySelectorAll('.btn-switch');
switchBtns.forEach(switchBtn => {
	switchBtn.addEventListener('click', () => {
		if (!switchBtns[1].classList.contains('active')) {
			switchBtn.classList.add('active');
			switchBtns[0].classList.remove('active');
			proPricingEl.innerText = `$${proDiscountPerMonth}`;
			enterprisePricingEl.innerText = `$${enterpriseDiscountPerMonth}`;
		} else {
			switchBtns[0].classList.add('active');
			switchBtns[1].classList.remove('active');
			proPricingEl.innerText = `$${proMonthlyPrice}`;
			enterprisePricingEl.innerText = `$${enterpriseMonthlyPrice}`;
		}
	});
});

// FAQ
faqHeaders.forEach(header => {
	header.addEventListener('click', function (e) {
		header.classList.toggle('active');
		const faqBody = header.nextElementSibling;
		if (header.classList.contains('active')) {
			faqBody.style.maxHeight = faqBody.scrollHeight + 'px';
		} else {
			faqBody.style.maxHeight = 0;
		}
	});
});
