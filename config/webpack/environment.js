const { environment } = require('@rails/webpacker')

module.exports = environment


const webpack = require("webpack")
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquey',
    jQuery: 'jquery/src/jquey',
    Popper: 'popper.js'
  })
)
