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