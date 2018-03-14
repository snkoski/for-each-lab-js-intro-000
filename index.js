function iterativeLog(array) {
  array.forEach((element, index, array) => {console.log(`${index}: ${element}`);});
}

function iterate(callback) {
  var testArray = ["dog", "cat", "platypus"];
  
  testArray.forEach(callback);
  
  return testArray;
}

function doToArray(array, callback) {
  array.forEach(callback);
}