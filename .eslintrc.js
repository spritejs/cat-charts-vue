module.exports = {
  "root": true,
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "plugins": [ "flowtype", "html", "vue" ],
  "settings": {
    "html/html-extensions": [ ".html" ]
  },
  "globals": {
    "axios": true,
    "elastic": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  "rules": {
    'vue/singleline-html-element-content-newline': 0,
    'vue/name-property-casing': 0,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': 0,
    'no-console': 0,
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    semi: 0,
    'comma-style': 2,
    'block-spacing': 2,
    'array-bracket-spacing': [ 2, "never" ],
    //空行最多不能超过100行
    'no-multiple-empty-lines': [ 0, { max: 500 } ],
    //关闭禁止混用tab和空格
    'no-mixed-spaces-and-tabs': [ 0 ],
    'space-before-function-paren': 0,
    'comma-dangle': 0
  },
  "env": {
    "browser": true,
  }
}
