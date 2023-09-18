const myNums = [1,2,3]

const myTotal =myNums.reduce( function ( acc,currval){
    //console.log(`acc:${acc}and currval:${currval}`);
    return acc + currval
},1)

const myShopingCart = [
    {
    myitem:" js course",
    price: 2999},
    {myitem:"py course",
    price:3999},
    {myitem:" dev course",
    price: 4999},
    {myitem:" btech course",
    price: 6999}
]
    const pricetopay  = myShopingCart.reduce( (acc,item) =>acc + item.price ,0) 


    console.log(pricetopay);