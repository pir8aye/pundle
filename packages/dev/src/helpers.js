/* @flow */

import invariant from 'assert'
import type { MiddlewareConfig, ServerConfig } from '../types'

export function fillMiddlewareConfig(config: Object): MiddlewareConfig {
  const toReturn = {}

  if (typeof config.hmrPath !== 'undefined') {
    if (config.hmrPath) {
      invariant(typeof config.hmrPath === 'string', 'config.hmrPath must be a string or null')
      toReturn.hmrPath = config.hmrPath
    } else toReturn.hmrPath = null
  } else toReturn.hmrPath = '/__sb_pundle_hmr'
  if (config.hmrHost) {
    invariant(typeof config.hmrHost === 'string', 'config.hmrHost must be a string')
    toReturn.hmrHost = config.hmrHost
  } else toReturn.hmrHost = ''
  if (config.bundlePath) {
    invariant(typeof config.bundlePath === 'string', 'config.bundlePath must be a string')
    toReturn.bundlePath = config.bundlePath
  } else toReturn.bundlePath = '/bundle.js'
  if (typeof config.sourceMap !== 'undefined') {
    toReturn.sourceMap = !!config.sourceMap
  } else toReturn.sourceMap = true
  if (config.sourceMapPath) {
    invariant(typeof config.sourceMapPath === 'string', 'config.sourceMapPath must be a string')
    toReturn.sourceMapPath = config.sourceMapPath
  } else toReturn.sourceMapPath = '/bundle.js.map'

  // toReturn.hmrReports = typeof config.hmrReports === 'undefined' ? true : !!config.hmrReports
  // ^ TODO: Uncomment this when HMR Reports are not ugly
  toReturn.hmrReports = !!config.hmrReports

  return toReturn
}

export function fillServerConfig(config: Object): ServerConfig {
  const toReturn = {}

  invariant(typeof config.port === 'number' && Number.isFinite(config.port), 'config.port must be a valid number')
  invariant(typeof config.directory === 'string' && config.directory, 'config.directory must be a string')
  toReturn.port = config.port
  toReturn.directory = config.directory
  toReturn.redirectNotFoundToIndex = !!config.redirectNotFoundToIndex

  return toReturn
}
