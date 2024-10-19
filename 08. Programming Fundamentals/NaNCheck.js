function isNaN(value) {
    if (typeof value === "number") {
        let x = value+1;
        return x !== x;
    } else {
        return false;
    }
}

function testIsNaN() {
    // Test cases with expected outcomes
    const testCases = [
        { input: NaN, expected: true },
        { input: "NaN", expected: false },
        { input: undefined, expected: false },
        { input: null, expected: false },
        { input: "abc", expected: false },
        { input: 123, expected: false },
        { input: 0 / 0, expected: true },
        { input: 0, expected: false },
        { input: 1, expected: false },
    ];

    let allTestsPassed = true;

    for (const testCase of testCases) {
        const result = isNaN(testCase.input);
        if (result !== testCase.expected) {
            console.error(`Test failed for input: ${testCase.input}. Expected: ${testCase.expected}, Got: ${result}`);
            allTestsPassed = false;
        }
    }

    if (allTestsPassed) {
        console.log("All tests passed!");
    }
}

// Run the test function
testIsNaN();