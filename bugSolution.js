```javascript
// Configure PurgeCSS to include dynamically generated classes
module.exports = {
  content: [ 
    './src/**/*.html', 
    './src/**/*.js', // Add this to include JavaScript files
    { raw: "\.className = '...'" } // or similar selectors, depending on the method used to add classes
  ],
  theme: {
      extend: {
          colors: {
              'theme-color': '#007bff',
          }
      }
  },
  plugins: [],
}
```