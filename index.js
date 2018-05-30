'use strict'

const replify = require('replify')

module.exports = function(cuk) {
  const { path } = cuk.lib

  replify({
    name: 'cuk',
    path: path.join(cuk.dir.data, 'tmp')
  }, {}, { cuk: cuk, helper: cuk.lib.helper })

  return Promise.resolve({
    id: 'repl',
    tag: 'util'
  })
}