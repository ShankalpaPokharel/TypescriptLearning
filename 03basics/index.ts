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


