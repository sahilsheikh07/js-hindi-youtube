const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allheros = marvel_heros.concat(dc_heros)

//console.log(allheros);

const real_another = [1,2,3,[4,5,6],7,[6,7,[3,4]]]

const real_another_arry = real_another.flat(Infinity)

console.log(real_another_arry);


console.log(Array.isArray("sahil"));
console.log(Array.from("sahil"));

console.log(Array.from({name: "sahil"}));

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2,score3));
