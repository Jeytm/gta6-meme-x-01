// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself, not this program: POST.json at the
// repository root names the post, and this program copies POST.json into
// /output so the gate can read it. That is the whole job.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// POST.json currently holds a placeholder address: replace it with the real
// post's address (https://x.com/<handle>/status/<id>) before submitting.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
} catch (err) {
  console.error(`could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
