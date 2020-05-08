module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:vue/essential", // eslint-plugin-vue
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  // "globals": {
  //     "Atomics": "readonly",
  //     "SharedArrayBuffer": "readonly"
  // },
  parserOptions: {
    ecmaVersion: 2019, // 想要使用的 ECMAScript 版本
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    jsx: true // - 启用 JSX
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "no-unused-vars": "off"
  }
};
