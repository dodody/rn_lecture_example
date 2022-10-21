module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          animations: './src/components/animations',
          custom: './src/components/custom',
          atoms: './src/components/atoms',
          molecules: './src/components/molecules',
          organisms: './src/components/organisms',
          modals: './src/components/organisms/Modals',
          statics: './src/components/statics',
          themes: './src/components/themes',
          templates: './src/components/templates',
          pages: './src/pages',
          tabs: './src/tabs',
          utils: './src/utils',
          img: './src/img',
          hooks: './src/hooks',
          theme: './src/theme',
        },
      },
    ],
  ],
};
