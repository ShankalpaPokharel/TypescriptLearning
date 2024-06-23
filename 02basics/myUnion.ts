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