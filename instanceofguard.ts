// instance of type guard or type narrowing
class person {
    name: string
    constructor(name:string){
        this.name = name
    }

    getsleep(numOfhours:number){
        console.log(`${this.name} daily ${numOfhours} ghonta ghumai`)
    }
}

class Student extends person{
    constructor(name:string){
        super(name)
    }

    // method
    dostudy(numOfhours:number){
        console.log(`${this.name} daily ${numOfhours} ghonta study kore`)
    }
}

class Teacher extends person{
    constructor(name:string){
 super(name)
}
takeclass(numOfhours:number){
        console.log(`${this.name} daily ${numOfhours} ghonta class nei`)
    }

    }
   const getUSerInfo=(user:person){

   }

   const student5 = new Student("Mr Student")

   const Teacher1 = new Teacher("Mr Teacher")