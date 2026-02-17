const numbers = [1,2,5,80,45,66,3];
const doubled = numbers.map(num =>num*2);
console.log(doubled)

const names = ['make', 'rahim','karim', 'tom']
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames)


const nums = [5,7,18.99,90,40,11]
const result = nums.filter(num => num > 10)
console.log(result)

const ages =[30,20,19,9,4,2];
const bigage = ages.filter(age => age >= 18);
console.log(bigage)