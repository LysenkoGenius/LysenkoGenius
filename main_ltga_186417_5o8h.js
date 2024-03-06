18 + kiwi
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
kiwi

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const squareRoot = num => Math.sqrt(num);
const getUniqueValues = array => [...new Set(array)];
class MyClass { constructor() { this.property = getRandomString(); } }
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const formatDate = date => new Date(date).toLocaleDateString();
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
console.log(getRandomString());
