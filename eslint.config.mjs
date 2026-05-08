import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Ignore everything outside src folder
    "coverage/**",
    "*.config.*",
    "*.setup.*",
  ]),
  // Only lint files in src directory
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
  },
]);

export default eslintConfig;
