function myNonClosure () {
  // variable will not be stored 
  // in a closure between calls
  // to the myNonClosure function
  var date = new Date();
  return date.getMilliseconds();
}

// Closure example
function myClosure () {
  // date variable will be stored 
  // in a closure due to the nested 
  // function referencing it
  var date = new Date();
  
  // nested function
  return function () {
    var otherDate = new Date();
    
    return "Closure variable value for " + 
      "milliseconds: " +
      date.getMilliseconds() +
      "<br>Non closure variable " +
      "value for milliseconds: " +
      otherDate.getMilliseconds();
  };
}


var myClosure2 = function () {
  var date = new Date(),
      myNestedFunc = function () {
        return date.getMilliseconds();
      };
  return {
    myNestedFunc: myNestedFunc
  };
}();


window.onload = function () {
  // using a closure
  var output =
      document.getElementById('Output'),
      closure = myClosure();
  
  output.innerHTML = closure();
  
  setTimeout( function() {
    output.innerHTML += 
      '<br><br>' + closure();
  }, 1500);
  
  output.innerHTML += myClosure2.myNestedFunc();
}