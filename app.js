"use strict";
var _a;
// app.ts
let timeoutId;
function isValidUrl(url) {
    // Basic URL format validation
    const urlRegex = /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(\/)?$/;
    return urlRegex.test(url);
}
function checkUrlExistence(url) {
    // Simulating asynchronous server call
    return new Promise((resolve) => {
        setTimeout(() => {
            // Mock server response - replace this with actual server call
            const exists = Math.random() < 0.5 ? "exists" : "does not exist";
            const type = Math.random() < 0.5 ? "file" : "folder";
            resolve(`URL ${exists} and is a ${type}.`);
        }, 1000);
    });
}
(_a = document
    .getElementById("urlInput")) === null || _a === void 0 ? void 0 : _a.addEventListener("input", function (event) {
    const urlInput = event.target.value.trim();
    const resultDiv = document.getElementById("result"); // Non-null assertion here
    clearTimeout(timeoutId);
    if (isValidUrl(urlInput)) {
        timeoutId = setTimeout(() => {
            checkUrlExistence(urlInput).then((result) => {
                resultDiv.textContent = result;
            });
        }, 500);
    }
    else {
        resultDiv.textContent = "Invalid URL format";
    }
});
