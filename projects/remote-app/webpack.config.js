const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'remoteApp',

  exposes: {
    // './Module': './projects/remote-app/src/app/app.module.ts',
    './InnerModule': './projects/remote-app/src/app/inner/inner.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
