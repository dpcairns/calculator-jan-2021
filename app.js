// import functions and grab DOM elements
const welcomeElement = document.getElementById('welcome');
const myButton = document.getElementById('change-button');
const input = document.getElementById('user-input');

// initialize state

// set event listeners to update state and DOM
myButton.addEventListener('click', () => {
    // post-click logic goes here!
    welcomeElement.style.color = 'magenta';
    welcomeElement.style.background = 'lightgreen';

    welcomeElement.textContent = input.value;
});
