#!/usr/bin/env node
/**
 * Runs a Lighthouse audit against a URL and writes scores to src/data/lighthouse-scores.json.
 * Usage: node scripts/lighthouse-audit.mjs [url]
 * Default URL: http://localhost:3000
 */
import { execSync } from "child_process";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || "http://localhost:3000";

console.log(`Running Lighthouse audit against ${url}...`);

try {
  const result = execSync(
    `npx lighthouse "${url}" --output=json --chrome-flags="--headless --no-sandbox" --only-categories=performance,accessibility,best-practices,seo --quiet`,
    { maxBuffer: 50 * 1024 * 1024, encoding: "utf-8" }
  );

  const report = JSON.parse(result);
  const scores = {
    performance: Math.round(report.categories.performance.score * 100),
    accessibility: Math.round(report.categories.accessibility.score * 100),
    bestPractices: Math.round(report.categories["best-practices"].score * 100),
    seo: Math.round(report.categories.seo.score * 100),
    url,
    date: new Date().toISOString().split("T")[0],
  };

  const outPath = resolve(__dirname, "../src/data/lighthouse-scores.json");
  writeFileSync(outPath, JSON.stringify(scores, null, 2) + "\n");

  console.log("\nLighthouse Scores:");
  console.log(`  Performance:    ${scores.performance}`);
  console.log(`  Accessibility:  ${scores.accessibility}`);
  console.log(`  Best Practices: ${scores.bestPractices}`);
  console.log(`  SEO:            ${scores.seo}`);
  console.log(`\nScores written to src/data/lighthouse-scores.json`);
} catch (err) {
  console.error("Lighthouse audit failed:", err.message);
  process.exit(1);
}
