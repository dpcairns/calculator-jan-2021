import { getSum } from './utils.js';

const additionField = document.getElementById('add-input-1');
const additionField2 = document.getElementById('add-input-2');
const addResults = document.getElementById('add-results');

export function myClickHandler() {
    // we have a type problem! these are strings -- we want numbers!
    const fieldValue = additionField.valueAsNumber;
    const fieldValue2 = additionField2.valueAsNumber;

    // pretend for a moment that adding things together is complicated
    const sum = getSum(fieldValue, fieldValue2);

    addResults.textContent = sum;
}