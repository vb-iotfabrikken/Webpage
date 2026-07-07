/**
 * Pre-commit gate: run locale grammar audit when staged files under src/data/ change.
 */

import { execSync } from "node:child_process";

const staged = execSync("git diff --cached --name-only --diff-filter=ACMR", {
  encoding: "utf8",
}).trim();

if (!staged) process.exit(0);

const files = staged.split("\n").filter(Boolean);
const touchesData = files.some(
  (f) => f.replace(/\\/g, "/").startsWith("src/data/") && f.endsWith(".ts"),
);

if (!touchesData) process.exit(0);

console.log("Staged src/data changes — running locale grammar audit…");
execSync("npm run check:locale", { stdio: "inherit" });
