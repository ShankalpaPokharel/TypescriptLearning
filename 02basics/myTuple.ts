// const user: (string|number)[] = [1,"hc"]

// for precise order 
let user: [number,string,boolean] 
user = [1,"ab",true]

let rgb:[number,number,number] = [255,123,112]

type Userr = [number,string]

const newUser:Userr =[112,"abc@gmail.com"]

newUser[1] = "ab.com" //we are able to change like list but this is not behevior of tuple
newUser.push("hi")