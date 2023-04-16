// eslint-disable-next-line no-undef
require( '@rushstack/eslint-patch/modern-module-resolution' )

// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  plugins: [],
  ignorePatterns: [
    '/utils/md5/*.*'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-console': 'off',
    'quotes': [ 'error', 'single' ],
    'space-in-parens': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'computed-property-spacing': [ 'error', 'always' ],
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'always',
        'named': 'always',
        'asyncArrow': 'always',
      },
    ],
    'camelcase': 'off',
    'no-unused-vars': 'off',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        'singleline': 'never',
        'multiline': 'always'
      }
    ],
    'vue/no-deprecated-filter': 'off',
    'vue/component-definition-name-casing': [ 'error', 'kebab-case' ],
    'vue/no-mutating-props': 'off',
    'vue/valid-v-slot': [
      'error',
      {
        'allowModifiers': true,
      },
    ],
    'vue/order-in-components': [
      'error',
      {
        'order': [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          [ 'delimiters', 'comments' ],
          [ 'components', 'directives', 'filters' ],
          'extends',
          'mixins',
          [ 'provide', 'inject' ],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          [ 'props', 'propsData' ],
          'emits',
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          [ 'template', 'render' ],
          'renderError',
        ],
      },
    ],
  },
}
