// class ==>object==>oop

class Animal{
    name:string;
    species:string;
    sound:string;

    constructor(name:string,species:string,sound:string){
        this.name = name
        this.species = species
        this.sound = sound

    }
}

const dog = new Animal("dogesh bhai", "dog", "ghew ghew")

// console.log(dog.name)

const cat = new Animal("simba","cat","mewu mewu")

console.log(cat.sound)