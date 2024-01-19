// app.ts
let timeoutId: ReturnType<typeof setTimeout>;

function isValidUrl(url: string): boolean {
  // Basic URL format validation
  const urlRegex =
    /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(\/)?$/;
  return urlRegex.test(url);
}

function checkUrlExistence(url: string): Promise<string> {
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
