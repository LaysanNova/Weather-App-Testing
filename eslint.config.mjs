import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module"
      },
      globals: {
        // Browser
        window: "readonly",
        document: "readonly",
        fetch: "readonly",
        navigator: "readonly",
        // Node
        process: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        // Playwright
        page: "readonly",
        browser: "readonly",
        context: "readonly",
        expect: "readonly"
      }
    },
    plugins: { "@typescript-eslint": tsPlugin },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/no-unused-expressions": [
        "error",
        { allowShortCircuit: true, allowTernary: true }
      ],
      "no-undef": "off"
    }
  },
  prettier,
  {
    files: ["src/run/**/*.spec.ts", "src/run/**/*.test.ts"],
    rules: {
      "@typescript-eslint/no-unused-expressions": "off"
    }
  }
];