//singletion

// pbjects literals
const mySym = Symbol("key1")

const jsUser = {
    name:"sahil",
    "full name": "sahil sheikh",
    age:20,
    [mySym]: "key1",
    location: "udaipur",
    email: "sahil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);    //email print string value
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);       //symbol use squre brackets


jsUser.email = "sahil@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "sahil@microsoft.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}
    jsUser.greetingTwo = function(){
        console.log('hello js user, ${this.email}');
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




