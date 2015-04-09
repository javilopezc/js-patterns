window.onload = function(){
  eqCtl =
    document.getElementById('eq');
  currNumberCtl =
    document.getElementById('currNumber');
};

function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y == 0) {
    alert("Can't divide by 0");
    return 0;
  }
  return x / y;
}

function setVal(val) {
  currNumberCtl.innerHTML = val;
}

function setEquation(val) {
  eqCtl.innerHTML = val;
}

function clearNumbers() {
  lastNumber = null;
  equalsPressed = operatorSet = false;
  setVal('0');
  setEquation('');
}

function setOperator(newOperator) {
  if (newOperator == '=') {
    equalsPressed = true;
    calculate();
    setEquation = ('');
    return;
  }
  
  // Handle case where = was pressed
  // followed by an operator (+, -, *, /)
  if (!equalsPressed) calculate();
  equalsPressed = false;
  operator = newOperator;
  operatorSet = true;
  lastNumber =
    parseFloat(currNumberCtl.innerHTML);
  var eqText = (eqCtl.innerHTML == '') ?
      lastNumber + ' ' + operator + ' ' :
      eqCtl.innerHTML + ' ' + operator + ' ';
  setEquation(eqText);  
}

function numberClick(e) {
  var button = (e.target) ? e.target : e.srcElement;
  if (operatorSet == true ||
       currNumberCtl.innerHTML == 0) {
    setVal('');
    operatorSet = false;    
  }
  setVal(currNumberCtl.innerHTML + 
          button.innerHTML);
  setEquation(eqCtl.innerHTML + 
               button.innerHTML);
}

function calculate() {
  if (!operator || lastNumber == null) return;
  var currNumber = parseFloat(currNumberCtl.innerHTML),
      newVal = 0;
  switch (operator) {
      case '+':
        newVal = add(lastNumber,
                      currNumber);
        break;      
      case '-':
        newVal = substract(lastNumber,
                            currNumber);
        break;
      
      case '*':
        newVal = multiply(lastNumber, 
                           currNumber);
        break;
      
      case '/' = divide(lastNumber,
                         currNumber);
        break;        
  }
  setVal(newVal);
      lastNumber = newVal;
  
}