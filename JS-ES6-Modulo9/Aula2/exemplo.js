const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => {
  if (bigger < number) {
    return bigger
  } else {
    return number;
  }
}
const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85
