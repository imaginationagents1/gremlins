class GremlinCollection
  _elements : null

  constructor : ->
    @_elements = []

  addGremlin : (element) ->
    @_elements.push element

  addList : (nodeList) ->
    @_elements.push(gremlin) for gremlin in nodeList

  size : ->
    @_elements.length

  toArray : ->
    @_elements
    
class Foo extends GremlinCollection
  constructor: ->
    super


module.exports = GremlinCollection