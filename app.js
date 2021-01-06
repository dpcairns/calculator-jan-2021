// import functions and grab DOM elements
const welcomeElement = document.getElementById('welcome');
const myButton = document.getElementById('change-button');

// initialize state

// set event listeners to update state and DOM
myButton.addEventListener('click', () => {
    // post-click logic goes here!
    welcomeElement.style.color = 'magenta';
    welcomeElement.style.background = 'lightgreen';

    welcomeElement.textContent = 'I CAN DO ANYTHING!!';
});
