/*map*/
const numbers = [2, 4, 8, 10];
const halves = numbers.map(x => x / 2);
// halves is [1, 2, 4, 5]

/*filter*/
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const longWords = words.filter(word => word.length > 6);
// longWords is ["exuberant", "destruction", "present"]

/*reduce*/
const total = [0, 1, 2, 3].reduce((sum, value) => sum + value, 1);
console.log(total);