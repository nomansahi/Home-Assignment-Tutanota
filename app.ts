let timeoutId: ReturnType<typeof setTimeout>;

function isValidUrl(url: string): boolean {
  // Basic URL format validation
  // const urlRegex =
  //   /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(\/)?$/;
  // return urlRegex.test(url);
  const urlRegex =
    /^(?:(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,})(\/[^/?#]+\/?)?([/?].*)?$/;
  return urlRegex.test(url);
}

async function checkUrlExistence(url: string): Promise<string> {
  // Simulating asynchronous server call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock server response - replace this with actual server call
      const exists = Math.random() < 0.5 ? "exists" : "does not exist";
      const type = Math.random() < 0.5 ? "file" : "folder";
      resolve(`URL ${exists} and is a ${type}.`);
    }, 0);
  });
}
const urlInput = document.getElementById("urlInput") as HTMLInputElement;
const resultDiv = document.getElementById("result")!;

urlInput.addEventListener("input", async function () {
  const url = urlInput.value.trim();
  clearTimeout(timeoutId);

  if (isValidUrl(url)) {
    timeoutId = setTimeout(async () => {
      if (url === urlInput.value.trim()) {
        resultDiv.textContent = await checkUrlExistence(url);
      }
    }, 0);
  } else {
    resultDiv.textContent = "Invalid URL format";
  }
});
