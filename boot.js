'use strict'

const replify = require('replify')

module.exports = function(cuk) {
  const { path, _ } = cuk.lib
  const pkg = cuk.pkg.dev

  pkg.trace('Initializing...')
  const context = {
    cuk: cuk,
    helper: cuk.lib.helper
  }

  pkg.trace('Context » %s', _.keys(context).join(', '))

  replify({
    name: 'cuk',
    path: path.join(cuk.dir.data, 'tmp')
  }, {}, context)


  return Promise.resolve(true)
}