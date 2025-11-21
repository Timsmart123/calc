// 1. Get Operations

let displayEl = document.getElementById("display")

function updateDisplay(value) {
    displayEl.value = value
}

function addChar(value, resetDisplay=false) {
    // Get what is currently in the display
    let currDisplay = displayEl.value

    if (currDisplay == '0' || resetDisplay) {
        currDisplay = ''
    }


    // Add the value to the display
    let newDisplayText = currDisplay + value

    updateDisplay(newDisplayText)
}


// 2. Get Inputs
// 3. Handle basic operations
function handleBasicOperations() {
    let currDisplay = displayEl.value
    let result = eval(currDisplay)

    return updateDisplay(result, true)
}

// 4. Handle complex operations.
function handleCos() {
    // Here; call the handleBasicOperations to get rid of the symbols.
    handleBasicOperations()

    let currDisplay = displayEl.value

    let result = Math.cos(currDisplay)

    return updateDisplay(result, true)
}

function handleSin() {
    // Here; call the handleBasicOperations to get rid of the symbols.
    let currDisplay = displayEl.value

    let result = Math.sin(currDisplay)

    return updateDisplay(result, true)
}

function handleTan() {
    // Here; call the handleBasicOperations to get rid of the symbols.
    let currDisplay = displayEl.value

    let result = Math.tan(currDisplay)

    return updateDisplay(result, true)
}

function handleSqrt() {
    // Here; call the handleBasicOperations to get rid of the symbols.
    let currDisplay = displayEl.value

    let result = Math.sqrt(currDisplay)

    return updateDisplay(result, true)
}

function handleLn() {
    // Here; call the handleBasicOperations to get rid of the symbols.
    let currDisplay = displayEl.value

    let result = Math.log(currDisplay)

    return updateDisplay(result, true)
}

function handleSquare() {
    // Here; call the handleBasicOperations to get rid of the symbols.
    let currDisplay = displayEl.value

    let result = Math.sqrt(currDisplay)

    return updateDisplay(result, true)
}

function handleIndex() {
    // Here; call the handleBasicOperations to get rid of the symbols.
    let currDisplay = displayEl.value

    let result = Math.ln(currDisplay)

    return updateDisplay(result, true)
}
