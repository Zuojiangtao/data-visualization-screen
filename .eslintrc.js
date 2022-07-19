module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/strongly-recommended', '@vue/standard', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 禁止使用debugger
    'prettier/prettier': [
      2,
      {
        semi: false,
      },
      {
        usePrettierrc: true,
      },
    ],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 5,
        multiline: 1,
      },
    ],
    'vue/attribute-hyphenation': 0,
    'vue/html-self-closing': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-unused-components': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-parsing-error': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-mutating-props': 0,
  },
}
