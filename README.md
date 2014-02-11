coffeescript-namespace
======================

Simple coffeescript namespace

As described on the [coffeescript wiki](https://github.com/jashkenas/coffee-script/wiki/FAQ)

# Usage:
#
namespace 'Hello.World', (exports) ->
  # `exports` is where you attach namespace members
  exports.hi = -> console.log 'Hi World!'

namespace 'Say.Hello', (exports, top) ->
  # `top` is a reference to the main namespace
  exports.fn = -> top.Hello.World.hi()

Say.Hello.fn()  # prints 'Hi World!'
