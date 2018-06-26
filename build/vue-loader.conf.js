// var utils = require('./utils')
// var config = require('../config')
// // var isProduction = process.env.NODE_ENV === 'production'
// // for mp
// var isProduction = true

// module.exports = {
//   loaders: utils.cssLoaders({
//     sourceMap: isProduction
//       ? config.build.productionSourceMap
//       : config.dev.cssSourceMap,
//     extract: isProduction
//   }),
//   transformToRequire: {
//     video: 'src',
//     source: 'src',
//     img: 'src',
//     image: 'xlink:href'
//   }
// }


const utils = require('./utils')
const config = require('../config')

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: config.build.productionSourceMap,
    extract: true
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
