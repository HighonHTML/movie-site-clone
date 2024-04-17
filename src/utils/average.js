export default function average(arr) {
  return arr.reduce((sum, cur) => cur + sum, 0) / arr.length;
}
