module.exports = {
    purge: {
      content: [
        "./src/**/*.svelte",
      ],
      enabled: true
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
    future: {
      purgeLayerByDefault: true,
      removeDeprecatedGapUtilities: true
    }
  }
  
