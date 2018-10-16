var chocolateBars = ["snickers", "hundered grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
[...array, "element"]
return array
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  var array = [...array, "element"]
  return array
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
