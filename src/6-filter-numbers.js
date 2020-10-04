export const filterNumbers = (array, largerThan) => {
  // const deleteBigElements = (number) => {
  //   if (number < largerThan + 1) {
  //     return number;
  //   }
  // };
  // var newArray = array.map(deleteBigElements);
  // return newArray;

  let newArray = [];
  array.forEach((element) => {
    if (element < largerThan + 1) {
      newArray.push(element);
    }
  });
  return newArray;
};
