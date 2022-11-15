// UI Variables
const adviceID = document.querySelector('.id');
const adviceContainer = document.querySelector('.advice');
const toggleAdvice = document.querySelector('.get-advice');

// fetch advice
const getAdvice = async () => {
	// initialize variable
	let advice;
	// request for advice
	await fetch('https://api.adviceslip.com/advice')
		.then((res) => res.json())
		.then((data) => (advice = data.slip))
		.catch((err) => {
			console.log(err);
			advice = err.message + '. Please refresh the page';
		});

	// display advice
	// advice ID
	adviceID.textContent = advice.id;
	// advice
	adviceContainer.textContent = '"' + advice.advice + '"';
};

// show an advice on initial loading
document.addEventListener('DOMContentLoaded', () => {
	getAdvice();
});

// display another advice
toggleAdvice.addEventListener('click', () => {
	getAdvice();
});
