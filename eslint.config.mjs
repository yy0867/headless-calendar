import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended,
  ...compat.extends(
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ),
  {
    ignores: ["dist/**", "node_modules/**", ".next/**"],
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    ...compat.extends("plugin:@typescript-eslint/recommended"),
    rules: {},
  }
];