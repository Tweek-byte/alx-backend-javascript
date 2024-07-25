export default function appendToEachArrayValue(array, appendString) {
  const novelArray = [];
  for (const value of array) {
    novelArray.push(appendString + value);
  }

  return novelArray;
}
