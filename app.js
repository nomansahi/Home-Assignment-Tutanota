"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let timeoutId;
function isValidUrl(url) {
    // Basic URL format validation
    // const urlRegex =
    //   /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(\/)?$/;
    // return urlRegex.test(url);
    const urlRegex = /^(?:(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,})(\/[^/?#]+\/?)?([/?].*)?$/;
    return urlRegex.test(url);
}
function checkUrlExistence(url) {
    return __awaiter(this, void 0, void 0, function* () {
        // Simulating asynchronous server call
        return new Promise((resolve) => {
            setTimeout(() => {
                // Mock server response - replace this with actual server call
                const exists = Math.random() < 0.5 ? "exists" : "does not exist";
                const type = Math.random() < 0.5 ? "file" : "folder";
                resolve(`URL ${exists} and is a ${type}.`);
            }, 1000);
        });
    });
}
const urlInput = document.getElementById("urlInput");
const resultDiv = document.getElementById("result");
urlInput.addEventListener("input", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const url = urlInput.value.trim();
        clearTimeout(timeoutId);
        if (isValidUrl(url)) {
            timeoutId = setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                if (url === urlInput.value.trim()) {
                    resultDiv.textContent = yield checkUrlExistence(url);
                }
            }), 500);
        }
        else {
            resultDiv.textContent = "Invalid URL format";
        }
    });
});
