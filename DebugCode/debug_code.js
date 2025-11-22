function performOperation() {
    // Get raw user input as strings (so you can test character input)
    let a = document.getElementById('input1').value;
    let b = document.getElementById('input2').value;

    let operation = document.getElementById('operation').value;

    debugger; // Check a, b, and operation BEFORE conversion

    // Convert to numbers AFTER debugging
    let num1 = Number(a);
    let num2 = Number(b);

    debugger; // See how conversion changes values (e.g., "A" → NaN)

    // Check if both inputs are numbers
    if (!isNaN(num1) && !isNaN(num2)) {

        // Perform requested arithmetic operation
        let result = calculate(num1, num2, operation);

        displayResult(result);

    } else {
        displayResult("Invalid number input");
    }
}

function calculate(a, b, operation) {

    debugger; // Pause to inspect values and flow

    switch (operation) {
        case "add":
            return a + b;

        case "multiply":
            return a * b;

        case "divide":
            if (b === 0) return "Cannot divide by zero";
            return a / b;

        default:
            return "Unknown Operation";
    }
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}
