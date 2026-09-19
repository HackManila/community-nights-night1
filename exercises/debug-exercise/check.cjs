#!/usr/bin/env node
"use strict";
const game = require("./game.js");
const runChecks = require("./checks.js");
const suite = process.argv[2] || "baseline";
if (!["baseline", "acceptance", "all"].includes(suite)) {
  console.error("Usage: node check.cjs [baseline|acceptance|all]");
  process.exit(2);
}
let failed = 0;
for (const name of suite === "all" ? ["baseline", "acceptance"] : [suite]) {
  console.log("\n" + name.toUpperCase());
  const results = runChecks(game, name);
  for (const r of results) console.log((r.passed ? "PASS " : "FAIL ") + r.name + (r.error ? " — " + r.error : ""));
  const count = results.filter(r => !r.passed).length;
  failed += count;
  console.log(`${results.length - count}/${results.length} passed`);
}
if (suite === "baseline") console.log("\nBaseline checks do NOT verify the new completion feature. Run the acceptance suite too.");
process.exitCode = failed ? 1 : 0;
