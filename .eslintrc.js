module.exports = {
  root: true,
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    'react-hooks/exhaustive-deps': [0],
    'no-trailing-spaces': [0],
    'react-native/no-inline-styles': 0,
    'no-undef': 0,
    'handle-callback-err': 0,
    curly: 0,
    'no-extra-boolean-cast': 0,
    'prettier/prettier': 0,
  },
};
