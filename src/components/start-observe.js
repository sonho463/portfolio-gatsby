// お問い合わせボタンが下に来たら消える処理
window.onload = () => {
	console.log("start observe");
	startObserve();
};

const startObserve = () => {
	const callback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.intersectionRatio === 1) {
				cvButton.classList.add("is-hidden");
				console.log("active");
			} else if (!entry.isIntersecting) {
				cvButton.classList.remove("is-hidden");
				console.log("hidden");
			}
		});
	};

	const options = {
		threshold: [0.2, 1.0],
	};

	const observer = new IntersectionObserver(callback, options);
	const target = document.querySelector(".js-footer__logo");
	const cvButton = document.querySelector(".js-cv-button");

	observer.observe(target);
};
