((root, factory) ->
  if typeof exports is "object" and exports
    module.exports = factory() # CommonJS
  else if typeof define is "function" and define.amd
    define factory # AMD (RequireJS and family)
  else
    root.coffeescriptNamespace = factory() # Browser <script>
  return
) this, (->
  exports = {}
  exports.name = "coffeescript-namespace"
  exports.version = "0.1.0"
  exports.namespace = (target, name, block) ->
    [target, name, block] = [(if typeof exports isnt 'undefined' then exports else window), arguments...] if arguments.length < 3
    top    = target
    target = target[item] or= {} for item in name.split '.'
    block target, top

  exports
)

