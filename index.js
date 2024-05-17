const burgerBtn = document.querySelector(".burgerBtn");
const mobileNavigation = document.querySelector(".mobileNavigation");
const items = document.querySelector(".mobileNavigation__items");

const activeNavigation = () => {
	mobileNavigation.classList.toggle("navigationHidden");

	if (mobileNavigation.classList.contains("navigationHidden")) {
		// Dodajemy styl 'transition', gdy menu jest aktywowane
		items.style.transition = "opacity 1s ease 0.5s";
		items.style.opacity = 1;
	} else {
		// Usuwamy styl 'transition', gdy menu jest deaktywowane
		items.style.transition = "";
		items.style.opacity = 0;
	}
};

burgerBtn.addEventListener("click", activeNavigation);

////////accordion start

const accordionBtns = document.querySelectorAll(".accordion__btn");

function openAccordionTextBox() {
	const textBox = this.nextElementSibling;
	const iconSecond = this.querySelector(".accordion__icon__second");

	if (textBox.classList.contains("accordion__active")) {
		textBox.classList.remove("accordion__active");
		iconSecond.classList.remove("rotate");
	} else {
		closeAccordionTextBox();
		textBox.classList.add("accordion__active");
		iconSecond.classList.add("rotate");
	}
}

function closeAccordionTextBox() {
	const allActiveTextboxes = document.querySelectorAll(
		".accordion__text-box.accordion__active"
	);
	const allActiveIcons = document.querySelectorAll(
		".accordion__icon__second.rotate"
	);

	allActiveTextboxes.forEach((textBox) => {
		textBox.classList.remove("accordion__active");
	});

	allActiveIcons.forEach((icon) => {
		icon.classList.remove("rotate");
	});
}

accordionBtns.forEach((btn) =>
	btn.addEventListener("click", openAccordionTextBox)
);

//////accordion end
