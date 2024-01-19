let timeoutId: ReturnType<typeof setTimeout>;

function isValidUrl(url: string): boolean {
  // Basic URL format validation
  const urlRegex =
    /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(\/)?$/;
  return urlRegex.test(url);
}
