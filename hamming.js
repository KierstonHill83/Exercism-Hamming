function compute(str1, str2) {
  var newArray = [];
  var array1 = str1.split('');
  var array2 = str2.split('');
  if (array1.length !== array2.length) {
    throw new Error('DNA strands must be of equal length.');
  } else {
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        newArray.push(array1[i]);
      }
    }
  }
  return newArray.length;
}


module.exports = compute;