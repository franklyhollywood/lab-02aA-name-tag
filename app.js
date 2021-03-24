const nameInput = document.getElementById('newName');
const nameChange = document.getElementById('changeButton');
const displayName = document.getElementById('nameField');

nameChange.addEventListener('click', () => {
    if(nameInput.value === '') return;
    displayName.textContent = nameInput.value;

});

const mainColor = document.getElementById('main');
const footerColor = document.getElementById('footer');
const pinkButton = document.getElementById('pinkButton');
const greenButton = document.getElementById('greenButton');
const blueButton = document.getElementById('blueButton');
const resetButton = document.getElementById('resetButton');

pinkButton.addEventListener('click', () => {
    mainColor.style.backgroundColor = 'pink';
    footerColor.style.backgroundColor = 'pink';

});

greenButton.addEventListener('click', () => {
    mainColor.style.backgroundColor = 'lightgreen';
    footerColor.style.backgroundColor = 'lightgreen';

});

blueButton.addEventListener('click', () => {
    mainColor.style.backgroundColor = 'lightblue';
    footerColor.style.backgroundColor = 'lightblue';

});

resetButton.addEventListener('click', () => {
    mainColor.style.backgroundColor = 'red';
    footerColor.style.backgroundColor = 'red';

});