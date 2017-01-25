// Merge Sort

// Split Function
function split(wholeArray) {
  var firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length / 2));
  var secondHalf = wholeArray.slice(Math.floor(wholeArray.length / 2));
  return [firstHalf, secondHalf];
}

// Merge Function
function merge(firstHalf, secondHalf) {
  var arr1 = firstHalf;
  var arr2 = secondHalf;
  var arrOut = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      arrOut.push(arr1.shift());
    } else {
      arrOut.push(arr2.shift());
    }
  }
  while (arr1.length) { arrOut.push(arr1.shift()); }
  while (arr2.length) { arrOut.push(arr2.shift()); }
  return arrOut;
}

// Split Merge
function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    return merge(mergeSort(split(array)[0]), mergeSort(split(array)[1]));
  }
}
