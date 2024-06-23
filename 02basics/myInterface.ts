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
    
