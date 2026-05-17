// poitrik sompotti ke nijer kore neoa 

class student  {
    name: string;
    age: number;
    address: string;

    constructor(name:string, age:number , address: string){
        this.name = name,
        this.age = age,
        this.address = address
    }
    // method
    getSleep(){
        console.log(`${this.name} eto ghonta ghumay`)
    }
}

const student1 = new student ("Mr Liam", 26 , "dhaka")

student1.getSleep()

