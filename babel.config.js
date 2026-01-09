module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "import",
      {
        "libraryName": "element-plus",
        "customStyleName": (name) => {
          name = name.toLowerCase().replace(/-/g, "");
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      },
      "element-plus"
    ]
  ]
}