import { Skill } from "./skill.model";

export class Person {
//     lastname: string;
//     firstname: string;
//     age: number;
//     gender: string;
//     bio: string;
//     Skill: Skill[];
   
// // les propriétées ci dessus doivent etre initialisé via un constructeur
//  constructor(  // fonction qui prends les paramètre : 
//     lastnameParam: string,
//     firstnameParam: string,
//     ageParam: number,
//     genderParam: string,
//     bioParam: string,
//     skillParam: Skill[],

//  ){  // initialisation des variable ici
//     this.lastname= lastnameParam;
//     this.firstname= firstnameParam;
//     this.age= ageParam;
//     this.gender= genderParam;
//     this.bio= bioParam;
//     this.Skill= skillParam;
//  }
constructor(
    public lastname: string,
    public firstname: string,
    public age: number,
    public gender: string,
    public bio: string,
    public Skill: Skill[],
  ) {}
}