'use strict'

module.exports = function(cuk) {
  const { path } = cuk.lib

  return Promise.resolve({
    id: 'dev',
    tag: 'util, boot'
  })
}