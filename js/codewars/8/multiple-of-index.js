function multipleOfIndex(array) {
  let arr = [];
  for (key in array) {
    if (array [key] % key === 0) {
    arr.push(array[key]);
    }
  }
  return arr;
}
