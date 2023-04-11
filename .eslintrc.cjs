/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  "vue/attributes-order": ["error", {
    "order": [
      "DEFINITION",
      "LIST_RENDERING",
      "CONDITIONALS",
      "RENDER_MODIFIERS",
      "GLOBAL",
      ["UNIQUE", "SLOT"],
      "TWO_WAY_BINDING",
      "OTHER_DIRECTIVES",
      "OTHER_ATTR",
      "EVENTS",
      "CONTENT"
    ],
    "alphabetical": false
   }],
   "vue/max-attributes-per-line": ["error", {
    "singleline": {
      "max": 1
    },      
    "multiline": {
      "max": 1
    }
  }],
  "vue/component-definition-name-casing": ["error", "kebab-case"],
  'vue/multi-word-component-names': ['error', {
    'ignores': ['default']
  }],
  "space-before-blocks": "error",
  "eslint space-in-parens": ["error", "never"]
}
