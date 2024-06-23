const User = {
    name:"shankalpa",
    email:"shankalpa@gmail.com",
    isActive:true
}

function createUser({name:string,isPaid:boolean}){}

createUser({name:"hitesh", isPaid:false})

function createCourse():{name:string, price:number}{
    return {name:"reactjs",price:399}
}


type User = {
    name:string;
    email:string;
    isActive:boolean
}
function createeUser(user:User):User{
    return {name:"",email:"", isActive:true}
}

createeUser({name:"",email:"", isActive:true})




type Userr = {
    readonly _id:string;
    name:string;
    email:string;
    isActive:boolean;
    credcardDetails?:number //optional type
}

// function createUserr(u:User){

// }

let myUser:Userr = {
    _id:"1234",
    name:"s",
    email:"s@gmail.com",
    isActive:false,
    credcardDetails:3423

}

myUser.name = "fsdf"
myUser._id = "dfds" //can't assign on readonly

type cardNumber = {
    cardnumber:string
}

type cardDate = {
    cardDate:string
}

//combile the type
type cardDetails= cardNumber & cardDate & {
    cvv:number
}





export {}