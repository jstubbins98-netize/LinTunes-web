import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(projectDir, "dist", "public");
const indexPath = path.join(outputDir, "index.html");

let html = await readFile(indexPath, "utf8");

const cssMatch = html.match(/<link rel="stylesheet"[^>]+href="([^"]+)"[^>]*>/);
const scriptMatch = html.match(/<script type="module"[^>]+src="([^"]+)"[^>]*><\/script>/);

if (!cssMatch || !scriptMatch) {
  throw new Error("Could not find the built CSS and JavaScript assets.");
}

const fromOutput = (url) => path.join(outputDir, url.replace(/^\.\//, ""));
const css = await readFile(fromOutput(cssMatch[1]), "utf8");
let script = await readFile(fromOutput(scriptMatch[1]), "utf8");

for (const [fileName, mimeType] of [
  ["main_screen.jpg", "image/jpeg"],
  ["radio.jpg", "image/jpeg"],
]) {
  const image = await readFile(path.join(outputDir, "images", fileName));
  const dataUrl = `data:${mimeType};base64,${image.toString("base64")}`;
  script = script.replaceAll(`images/${fileName}`, dataUrl);
}

// Prevent bundled strings from terminating the inline script element.
script = script.replaceAll("</script", "<\\\\/script");

html = html
  .replace(cssMatch[0], () => `<style>${css}</style>`)
  .replace(scriptMatch[0], "")
  .replace(/<link rel="icon"[^>]*>/, "")
  .replace(/<link rel="preconnect"[^>]*>/g, "")
  .replace(/<link href="https:\/\/fonts\.googleapis\.com[^>]*>/, "")
  .replace("</body>", () => `<script>${script}</script></body>`);

const fileName = "OPEN LinTunes Website.html";
await writeFile(path.join(outputDir, fileName), html);
await writeFile(path.join(projectDir, fileName), html);
await writeFile(path.join(outputDir, "faq.html"), html);
await writeFile(path.join(projectDir, "faq.html"), html);
await writeFile(path.join(outputDir, "guide.html"), html);
await writeFile(path.join(projectDir, "guide.html"), html);

const workspaceDir = path.resolve(projectDir, "..", "..");
const webExportDir = path.join(workspaceDir, "LinTunes web");
await mkdir(webExportDir, { recursive: true });
await writeFile(path.join(webExportDir, "index.html"), html);
await writeFile(path.join(webExportDir, fileName), html);
await writeFile(path.join(webExportDir, "faq.html"), html);
await writeFile(path.join(webExportDir, "guide.html"), html);

console.log(`Created standalone browser files: ${fileName}, faq.html, and guide.html`);