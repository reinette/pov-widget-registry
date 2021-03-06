module.exports = {
  storage: {
    remote: {
      origin: {
        // Overrides the default location of the registry location.
        registryPath: '/pov-widget-registry/widget-registry/production',
      },
    },
    filesystem: {
      // Configure where the compiled registry will be stored.
      destination: {
        directory: 'dist/widget-registry/production',
      },
    },
  },
};
