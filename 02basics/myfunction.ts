function addTwo(num:number):number{
    // num.toUpperCase() //error
    return num+2
    // return "hello"
}
function getUpper(val:string){
    return val.toUpperCase()
}


function signUpUser(name:string,email:string,password:string,isPaid:boolean){

}

let loginUser = (name: string, email: string, isPaid: boolean = false) =>{

}

const getHellow = (s:string):string =>{
    return ""
}


const heros = [2,"thor","spiderman","ironman",1]

heros.map((hero):string => {
    return `hero is ${hero}`
    // return 1
})


function consoleError(errmsg:string):void{
    console.log(errmsg)
    // return 1
}
function handleError(errmsg:string):never{
    throw new Error(errmsg)
}

getUpper("hello")
addTwo(5)
signUpUser("shankalpa","shankalpa@gmail.com","fhsfa34",true)
loginUser("h","h@g.com")

export {}