//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("text");
    const delayInput = document.getElementById("delay");
    const button = document.getElementById("btn");
    const output = document.getElementById("output");

    // Function to create a delay
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Async function to handle the delay and display message
    async function showMessage() {
        const message = textInput.value.trim();
        const delay = parseInt(delayInput.value, 10);

        // validating input
        if (!message) {
            output.innerText = "";
            return;
        }
        if (isNaN(delay) || delay < 0) {
            output.innerText = "";
            return;
        }

        output.innerText = "";

        // Wait for the specified delay
        await wait(delay);

        // Display the message after the delay
        output.innerText = message;
    }
    button.addEventListener("click", showMessage);
});
