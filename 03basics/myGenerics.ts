const scoree:Array<number> = []
const names:Array<string> = []


function identityOne(val:boolean | number) : boolean | number {
    return val
}

function identitTwo(val:any):any{
    return val
}

function identityThree<Type>(val:Type):Type{
    return val
}
//in the type , when i pass the the number as a paramenter return type will be number

identityThree(true)

// shortcut of identityThree insteand of T we can put anything but should be the same to all
function identityFour<T>(val:T):T{
    return val
}

interface Bootle{
    brand:string,
    type:number
}

// identityFour<Bootle>({})

function getSearchProducts<T>(products:T[]):T{
    //do some database operations
    const myIndex = 3
    return products[myIndex]
}

//generic arrow function
const getMoreSearchProducts = <T,>(products:T[]):T=>{//we can simply write in <T> but in react we can see <T,> mention  as a generic not jsx syntax 
    //do some database operations
    const myIndex =4
    return products[myIndex]
}

interface Database{
    connection:string,
    username:string,
    passworrd:string
}

function anotherFunction <T,U extends Database>(valOne:T,valTwo:U):object{
    return {valOne,valTwo}
}

// anotherFunction(3,{})

interface Quiz{
    name:string,
    type: string
}

interface Course{
    name:string,
    author: string,
    subject:string
}

class Sellable<T>{
    public cart:T[]=[]

    addToCart(product:T){
        this.cart.push(product)
    }
}