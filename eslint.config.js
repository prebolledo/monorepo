// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,  
  {
    languageOptions: {
      parserOptions: {
        project: [
          "**/tsconfig.json",
        ],
        tsconfigRootDir: import.meta.dirname,
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  },
  {
    ignores: [
      "**/!node_modules/",
      "**/*.spec.ts",
      "**/*.mock.ts",
      "**/jest.config.ts",
      "eslint.config.js",
      "**/*.js",
      "**/*.d.ts",
      "**/dist",
    ],
  },
  {
    rules: {
      "@typescript-eslint/no-redundant-type-constituents": "error",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      //"no-console": "warn",
      "keyword-spacing": "error",
      "arrow-spacing": "error",
      "array-bracket-newline": ["error", "consistent"],
      "object-curly-spacing": ["error", "always", { "arraysInObjects": false }],
      "comma-spacing": ["error", { "before": false, "after": true }],
      "comma-dangle": ["error", "always-multiline"],
      "space-before-function-paren": ["error", { "named": "never" }],
      "semi": ["error", "always"],
      "curly": ["error"],
      "space-before-blocks": [
        "error",
        {
          "functions": "always",
          "keywords": "always",
          "classes": "always",
        },
      ],
      "brace-style": "error",
      "block-spacing": "error",
      "arrow-parens": ["error","always"],
      "quotes": [
        "error",
        "double",
        { "allowTemplateLiterals": true }
      ],
      "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
      "space-infix-ops": "error",
      "@typescript-eslint/explicit-function-return-type": "error",      
      "@typescript-eslint/consistent-type-definitions": "error",
      "@typescript-eslint/no-inferrable-types": 0,
      "@typescript-eslint/typedef": ["error", {"variableDeclaration": false}],
    },
  },  
);