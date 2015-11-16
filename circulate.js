function circulateRight(arr, shiftVal) {
	
	var arrayLength = arr.length;
  var j           = 0;
  var array       = new Array();
  
  for (var i = 0; i < arrayLength; i ++) {
   
    array[(j + shiftVal) % arrayLength] = arr[(i) % arrayLength];
    j ++;

  }

  return array;
}


function circulateLeft(arr, shiftVal) {
  
  var arrayLength = arr.length;
  var j           = arrayLength - 1;
  var array       = new Array();
  
  for (var i = arrayLength - 1; i >= 0; i --) {
   
    array[ ( (j - shiftVal) + arrayLength ) % arrayLength] = arr[(i) % arrayLength];
    j --;

  }
  
  return array;
}