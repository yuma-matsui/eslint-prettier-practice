module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "sort-keys-custom-order"],
  rules: {
    "sort-keys-custom-order/object-keys": [
      "error",
      { orderedKeys: ["id", "name"] },
    ],
    "sort-keys-custom-order/type-keys": [
      "error",
      { orderedKeys: ["id", "name"] },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
