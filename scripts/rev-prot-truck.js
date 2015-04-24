var Truck = function (eng) {
  this.engine = eng;
};

Truck.prototype = function() {
  var start = function () {
    alert('Truck started ' + this.engine);
      },
      stop = function () {
        alert('Truck stopped');
      };
  
  // Public members
  return {
    start: start,
    stop: stop
  };
}();