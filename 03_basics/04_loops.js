
for (let i = 0; i <= 10; i++) {
    const element = i;
    //console.log(i);
    
}
 
let myArry = ["babu","mukesh","rabani" ]

//console.log(myArry.length);

for (let i = 0; i < myArry.length; i++) {
    const element = myArry[i];
    //console.log(element);
}


for (let index = 1; index <= 20; index++) {
 if (index == 5) {
    //console.log(`detected 5`);
    break;
    }
    //console.log(`value of i is ${index}`);   
}


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
       console.log(`detected 5`);
       continue
       }
       console.log(`value of i is ${index}`);   
   }