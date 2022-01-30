
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return !matrix || matrix.length === 0 
  ? [] 
  : matrix.reduce ( (arr, item, index) => {
      return arr.concat ( index % 2 != 0 
                      ? item.reverse() 
                      : item);
  }
  )
}
