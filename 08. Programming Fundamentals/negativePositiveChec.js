function negativePositiveCheck(input) {
    if (typeof(input) !== "number") {
        return "Input is not a valid number";
    }
    if (input < 0) {
        return "negative";
    } else if (input > 1000) {
        return "positive";
    } else if (isNaN(input)) {
        return "Input is not a valid number";
    } else {
        if (1/input === -Infinity) {
            return "negative";
        } else {
            return "positive";
        }
    }

    function isNaN(value) {
        if (typeof value === "number") {
            let x = value+1;
            return x !== x;
        } else {
            return false;
        }
    }
}

function testNegativePositiveCheck() {
    // Test cases with expected outcomes
    const testCases = [
        { input: -1, expected: "negative" },
        { input: -1000, expected: "negative" },
        { input: 0, expected: "positive" }, // 0 is considered positive here
        { input: -0, expected: "negative" },
        { input: 1, expected: "positive" },
        { input: 500, expected: "positive" },
        { input: 1000, expected: "positive" },
        { input: 1001, expected: "positive" },
        { input: Infinity, expected: "positive" },
        { input: -Infinity, expected: "negative" },
        { input: NaN, expected: "Input is not a valid number" }, // NaN will fall into the 'else' block and be treated as positive
        { input: null, expected: "Input is not a valid number"}, // null will be coerced to 0 and treated as positive
        { input: undefined, expected: "Input is not a valid number"}, // undefined will be coerced to NaN and treated as positive
    ];

    let allTestsPassed = true;

    for (const testCase of testCases) {
        const result = negativePositiveCheck(testCase.input);
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
testNegativePositiveCheck();