// IMPORT MODULES under test here:
import { getDifference } from '../utils.js';

const test = QUnit.test;

test('it should return 7 when provided 9 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 7;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDifference(9, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('it should return -4 when provided 5 and 9', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDifference(5, 9);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});