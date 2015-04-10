var Truck = function (engine) {
  this.engine = engine;
};

Truck.prototype = {
  start: function() {
    alert('Car stated engine ' +
         this.engine);
  },
  stop: function() {
    alert('Car stopped');
  }
};