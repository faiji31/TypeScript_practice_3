// class ==>object==>oop

class Animal{
 

    constructor(public name:string, public species:string,public sound:string){
        this.name = name
        this.species = species
        this.sound = sound

    }
    makesound(){
        console.log(`${this.name} is making sound : ${this.sound}`)
    }
}

// const dog = new Animal("dogesh bhai", "dog", "ghew ghew")

// // console.log(dog.name)

// const cat = new Animal("simba","cat","mewu mewu")

// console.log(cat.sound)