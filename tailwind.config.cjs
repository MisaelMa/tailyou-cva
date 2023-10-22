

module.exports = {
  css: [
    './src/assets/main.css',
],
 // presets: [require('@vercel/examples-ui/tailwind'), ui],
  // `ui.content` includes a path to the components that are using tailwind in @acme/ui
  content: [  
    '../../packages/cva/src/**/*.{ts,tsx}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
}
