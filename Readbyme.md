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

8 v finish