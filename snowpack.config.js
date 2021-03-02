// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    dist: "/",
    static: "/"
  },
  plugins: [
    /* ... */
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy', // production build command
        watch: 'eleventy --watch', // (optional) dev server command
      },
    ],
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    "port": 3000,
    // "open": "none",
    "bundle": false,
    "out": "dist"
  },
  buildOptions: {
    /* ... */
  },
};
