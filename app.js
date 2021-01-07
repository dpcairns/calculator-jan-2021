const additionField = document.getElementById('add-input-1');
const additionField2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResults = document.getElementById('add-results');


addButton.addEventListener('click', () => {
    // we have a type problem! these are strings -- we want numbers!
    const fieldValue = additionField.valueAsNumber;
    const fieldValue2 = additionField2.valueAsNumber;

    const sum = fieldValue + fieldValue2;

    addResults.textContent = sum;
});