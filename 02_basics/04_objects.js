//const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "1234abc"
tinderuser.name = "mukesh gutka"
tinderuser.isLoggedIn = false


//console.log(tinderuser);

const regularuser = {
    email:"mukesh@gmail.com",
    fullname:{
        userfullname:{
            firstname: "mukesh",
            lastname: "gutka"

        }
    }
}
   // console.log(regularuser.fullname.userfullname.firstname);


   const obj1 = { 1:"a", 2: "b"}
   const obj2 = { 3:"a", 4:"b"}

   //const  obj3 = {obj1,obj2}


  // const obj3 = Object.assign({}, obj1, obj2,)
const obj3 = {...obj1,...obj2}
   console.log(obj3);

   const users = [
    {
        id:1,
        email:"s@gmail.com"
}

   ]

