// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself, not this program: POST.json at the
// repository root names the post, and this program validates that address
// and copies POST.json into /output so the gate can read it.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Validation (fail loudly instead of copying a bad file):
//   - POST.json must parse as JSON.
//   - Its `url` field must be a string.
//   - The address must be https://x.com/<handle>/status/<digits>, the
//     canonical post address the house fetches. Anything else (another
//     host, a non-status path, a non-numeric id, a query string or
//     fragment) is refused with a clear message and a non-zero exit.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const POST_ADDRESS = /^https:\/\/x\.com\/[A-Za-z0-9_]{1,15}\/status\/[0-9]+$/;

const postPath = join(botDir, "POST.json");

let raw: string;
try {
  raw = readFileSync(postPath, "utf8");
} catch (err) {
  console.error(`could not read POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}

let entry: unknown;
try {
  entry = JSON.parse(raw);
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
  console.error("POST.json must be a JSON object with a \"url\" field.");
  process.exit(1);
}

const url = (entry as Record<string, unknown>).url;
if (typeof url !== "string") {
  console.error("POST.json \"url\" must be a string.");
  process.exit(1);
}

if (!POST_ADDRESS.test(url)) {
  console.error(
    `POST.json "url" must be an https://x.com/<handle>/status/<digits> address, got: ${url}`,
  );
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(postPath, join(outDir, "POST.json"));
} catch (err) {
  console.error(`could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
