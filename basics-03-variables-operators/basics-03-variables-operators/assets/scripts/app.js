const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


//Gets input from input field
function getUserNumberInput(){
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult,calcDescription);// from vendor file
}

function writeLog(operationIndentifier,prevResult,operationNumber,newResult){
  const logEntry = {
    operation: operationIndentifier,
    preResult : prevResult,
    number:operationNumber,
    result:newResult
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation)
  console.log(logEntry);
}
function add(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+',initialResult,enteredNumber);
  writeLog('ADD',initialResult,enteredNumber,currentResult);
}

function subtract(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-',initialResult,enteredNumber);
  writeLog('subtract',initialResult,enteredNumber,currentResult);
}

function multiply(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*',initialResult,enteredNumber);
  writeLog('multiply',initialResult,enteredNumber,currentResult);
}

function divide(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/',initialResult,enteredNumber);
  writeLog('divide',initialResult,enteredNumber,currentResult);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

// currentResult = add(15,23);
// currentResult = (currentResult +  10) * 3 / 2 - 1;

// let calculationDescription ='(' + currentResult + ' +  10) * 3 / 2 - 1;'
// let errorMessage = 'An error \n' +  
//                     'occurred !'




// const defaultResult = 0;
// let currentResult = defaultResult;

// currentResult = (currentResult + 10) * 3 / 2 - 1;

// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';

// outputResult(currentResult, calculationDescription);