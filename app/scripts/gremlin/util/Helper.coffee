goog.provide 'gremlin.util.Helper'

class gremlin.util.Helper

  @hasClass    : (element, className) ->
    element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
  @addClass    : (element, className) ->
    element.className += " " + className if (!gremlin.util.Helper.hasClass(element, className))
  @removeClass : (element, className) ->
    if (gremlin.util.Helper.hasClass(element, className))
      reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
      element.className = element.className.replace(reg, ' ')