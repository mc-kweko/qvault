/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // use Tailwind's actual PostCSS plugin so directives are expanded
    tailwindcss: {},
    // autoprefixer is commonly added alongside Tailwind
    autoprefixer: {},
  },
}

export default config
