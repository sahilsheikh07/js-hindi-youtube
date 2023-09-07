let myDate = new Date ()

console.log(myDate.toLocaleTimeString());
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
let myCreatDate = new Date ("01-14-2023")
console.log(myCreatDate.getTime());
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',
{
    weekday:"long",
})
