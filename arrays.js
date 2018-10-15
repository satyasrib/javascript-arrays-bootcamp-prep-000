var chocolateBars = ["snickers", "hundered grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var array = ["element", ...array]
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}