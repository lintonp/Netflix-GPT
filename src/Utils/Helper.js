export function capitalizeFirstLetter(inputString) {
  // Check if the input is not empty
  if (inputString.length === 0) {
    return inputString;
  }

  // Convert the first letter to uppercase and the rest to lowercase
  const firstLetter = inputString.charAt(0).toUpperCase();
  const restOfString = inputString.slice(1).toLowerCase();

  // Combine the first letter and the rest of the string
  return firstLetter + restOfString;
}
