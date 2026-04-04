/** Read a non-httpOnly cookie in the browser (for attaching Bearer token in axios). */
export function getBrowserCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const parts = document.cookie.split("; ");
  for (const part of parts) {
    const eq = part.indexOf("=");
    if (eq === -1) continue;
    const key = part.slice(0, eq);
    if (key === name) {
      return decodeURIComponent(part.slice(eq + 1));
    }
  }
  return undefined;
}

export function clearBrowserCookie(name: string, path = "/"): void {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; Max-Age=0; path=${path}`;
}
