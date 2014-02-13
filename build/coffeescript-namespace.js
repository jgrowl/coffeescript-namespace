(function() {
  var __slice = [].slice;

  (function(root, factory) {
    if (typeof exports === "object" && exports) {
      module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
      define(factory);
    } else {
      root.coffeescriptNamespace = factory();
    }
  })(this, (function() {
    var exports;
    exports = {};
    exports.name = "coffeescript-namespace";
    exports.version = "0.1.0";
    exports.namespace = function(target, name, block) {
      var item, top, _i, _len, _ref, _ref1;
      if (arguments.length < 3) {
        _ref = [(typeof exports !== 'undefined' ? exports : window)].concat(__slice.call(arguments)), target = _ref[0], name = _ref[1], block = _ref[2];
      }
      top = target;
      _ref1 = name.split('.');
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        item = _ref1[_i];
        target = target[item] || (target[item] = {});
      }
      return block(target, top);
    };
    return exports;
  }));

}).call(this);
