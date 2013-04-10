goog.provide 'gremlin.Application'
goog.require 'gremlin.domObserver.DomObserver'
goog.require 'gremlin.gremlins.GremlinCollection'
goog.require 'gremlin.conf.Configuration'

class gremlin.Application
  instance = null

  class Application
    _observer : null
    _coll     : null

    constructor : ->
      @_conf = gremlin.conf.Configuration.get()
      @_observer = new gremlin.domObserver.DomObserver
      @_observer.onNewElements = @_onNew
      @_coll = new gremlin.gremlins.GremlinCollection

    _onNew : (elArray, cssClass) =>
      console.log "found #{elArray.length} new gremlins in the dom"
      console.dir elArray
      @_coll.add elArray

    start : ->
      @_observer.observe()

    config          : (option, value) ->
      @_conf.set option, value

      switch option
        when gremlin.conf.Configuration.options.AUTOLOAD
          # TODO stop / start autoloading
        else

  @get : () ->
    instance ?= new Application
