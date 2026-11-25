import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Somewhere a judge is reading its hundredth begging letter tonight — mine brought coffee. Enter, agents, the judge is caffeinated and feeling generous.";
const MAX_CHARS = 200;

const line = ENTRY.trim();
if (line.length === 0) throw new Error("entry is empty");
if (line.includes("\n")) throw new Error("entry must be a single line");
if (line.length > MAX_CHARS) {
  throw new Error(`entry is ${line.length} chars, max ${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", { mode: 0o644 });
chmodSync(join(outDir, "entry.txt"), 0o644);
console.log(`wrote entry.txt (${line.length} chars)`);
