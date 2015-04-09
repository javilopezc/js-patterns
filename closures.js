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
}