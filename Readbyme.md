# TypeScript

It is like superset of javascript it doesn't provide addation other feature it help to minimize the error.

```tsc myfile.ts```

Type Safety
Typescript all about type Safety

in js ``` 2 + "2" = '22' ```

beheviour of js sometime unexpected 

What typescrpt does:
static checking : it check the code syntax(you might doing wrong) when we write the code like java and some other. but js check by runtime if error the then show. 

misconcept: we write less code the js(false) . we write more in ts but it is worth it. 

write code in ts/tsx ===> transpile /compile into ===> js 

it's a development tool. Your project still runs js. 

### Types
Number String Boolean Null undefined void object Array Tuples ...
Any Never unkknown


Situations : 
A function accepts 2 numbers
A function returns a string


## Syntax

```ts
let variabelName: type(inlowercase) = value
let greetings: string = "Hello Shankalpa"
```

<b><u>interview question </u></b>

how to assign float and int in ts?

```number``` is for numbers like ```42```. JavaScript does not have a special runtime value for integers, so there's no equivalent to ```int``` or ```float``` - everything is simply ```number```



### Type Inference
TypeScript Inference. TypeScript Inference defines that TypeScript will automatically detect variables data type, functions return type, Object types, Array Types, etc. This detection is based on the values assigned to the variables and the usage of the code or function calls.


##### Any 

```ts
let hero;
function getHero(){
    return "thor"

}
hero=getHero()
//when hover in hero let hero:any
```


Typescript also has a special type, ```any``` , that you can use whenever you don't want a particular value cause typechecking errors. 

When you don't specify a type, and TypeScript can't infer it from context, the compiler will typicall defaut to ```any```. 
You usually want to avoid this, though, because ```any``` isn't type-checked. Use the compiler flag <u>noImplicityAny</u>. to flag any implicite ```any``` as an error


### Fuction 
```ts
function addTwo(num:number):number{
    // num.toUpperCase() //error
    return num+2
    // return "hello"
}

function signUpUser(name:string,email:string,password:string,isPaid:boolean){
}

let loginUser = (name: string, email: string, isPaid: boolean = false) =>{
}

// arrow function
const getHellow = (s:string):string =>{
    return ""
}

signUpUser("shankalpa","shankalpa@gmail.com","fhsfa34",true)
loginUser("h","h@g.com")
```
### Function with object
```ts
const User = {
    name:"shankalpa",
    email:"shankalpa@gmail.com",
    isActive:true
}

function createUser({name:string,isPaid:boolean}){}

createUser({name:"hitesh", isPaid:false})
createUser({name:"hitesh", isPaid:false,email:"s@s.com"})// it gives the error 
let user = {name:"hitesh", isPaid:false,email:"s@s.com"}
createUser(user) //it doesn't give the error

function createCourse():{name:string, price:number}{
    return {name:"reactjs",price:399}
}

export {}

```



## Type Aliases
```ts
type Userr = {
    readonly _id:string;
    name:string;
    email:string;
    isActive:boolean;
    credcardDetails?:number //optional type
}

// function createUserr(u:User){

// }
```

## Readonly and optional and Combine type in Typescript
```ts
type Userr = {
    readonly _id:string;
    name:string;
    email:string;
    isActive:boolean;
    credcardDetails?:number //optional type
}
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
```

## Union Types and List in Ts
```ts
let score:number | string = 33
score = 44
score= "55"

type User = {
    name:string;
    id:number
}
type Admin = {
    username:string;
    id:number
}
let shankalpa:User | Admin = {name:"shankalpa",id:3432}
shankalpa = {username:"sp",id:342}

// function getDbId(id:number | string){
//     console.log(`Db id is: ${id}`)
// }

// getDbId(3)
// getDbId("3")

function getDbId(id:number | string){
//    id.toLowerCase() //property lowercase doesn't exist on type number | string
    if (typeof id ==="string"){id.toLowerCase()}
}

getDbId(3)
getDbId("3")

//array
const data:number[] = [1,2,3,4]
const data2: string[] = ["1","2"]
const data3: (string | number | boolean)[] = ["1","2",2,true]


let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "middle"
```

## Tuples in typescript
```ts
// const user: (string|number)[] = [1,"hc"]

// for precise order 
let user: [number,string,boolean] 
user = [1,"ab",true]

let rgb:[number,number,number] = [255,123,112]

type Userr = [number,string]

const newUser:Userr =[112,"abc@gmail.com"]

newUser[1] = "ab.com" //we are able to change like list but this is not behevior of tuple
newUser.push("hi")
```


## Interface in typescript
```ts
interface Useer {
    readonly dbId:number
    email:string,
    userId:number,
    googleId?:string
    // startTrail:()=>string
    startTrail():string// both can do
    getCoupon(couponname:string):number
}

//reopening of interface
interface Useer {githubToken:string}

//inheritance
interface Adminn extends Useer{
    role:"admin"|"ta"|"learner"
}


const shank:Useer = {dbId:22,email:"s@g.com",userId:3432,githubToken:"github",
    startTrail:()=>{return "trail started"},
    getCoupon:(name:"san10")=>{return 10}
}
const sha:Adminn = {dbId:22,email:"s@g.com",userId:3432,githubToken:"github", role:"admin",
    startTrail:()=>{return "trail started"},
    getCoupon:(name:"san10")=>{return 10}
}
    
```

![interface vs type alises](<images/Screenshot 2024-06-23 at 10.10.03 AM.png>)

## Private and Public in typescript
```ts
class User{
    readonly city:string = "kathmandu"
    #id:string="sdfsdf" //here # work as a pirvate keyword
    constructor(public email:string, public name:string, private userId:string){

    }
}
const john = new User("","","")
john.name
```


## Getters and Setters and protected in typescript
private : can access only in class
public :anywhere outside the class
protected : inherited class

```ts
class Uuser{
    protected _courseCount = 1 //protected works on where it is inherited. not outside the class
    readonly city:string = "kathmandu"
    #id:string="sdfsdf" //here # work as a pirvate keyword
    constructor(public email:string, public name:string, private userId:string){
    }

    private deleteToken(){
        console.log("Deleted token")
    }

    get getAppleEmail():string{
        return `apple${this.email}`
    }
    // getter
    get courseCount():number {
        return this._courseCount
    }

    // setter
    set courseCount(courseNum:number){ //not allow to return type (couseNum):void/stirg
        if (courseNum<= 1){
            throw new Error("Course coun t shuld be more than 1")
        }
        this._courseCount = courseNum
    }   
}

class SubUser extends Uuser{
    isFamily:boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const niko = new Uuser("","","")
niko.courseCount = 3
```

## Abstract
```ts
// abstract is exact blueprint
abstract class TakePhoto{
    constructor(public cameraMode:string, public filter:string){}

    abstract getSepia():void //this method should use by inherited class
    getReelTime():number{
        //some complex clalucation
        return 8
    }
}

// const nikodomas = new TakePhoto("test","Test") //can't create instane of abstrac class

class Instagram extends TakePhoto{
    constructor(public cameraMode:string,public filter:string,public burst:number){
        super(cameraMode,filter)
    }
    getSepia(): void {
        console.log("Sepia")
    }
}
const nikodomas = new Instagram("test","Test",3)
```


## Generics in Typescript
it make component(chunks of code) make code reusable. 
```ts
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


// **Generic class**

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


```

