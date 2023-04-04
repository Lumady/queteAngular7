import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person.model';
import { Skill } from '../model/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit{
developer: Person = new Person("Destrucs","Frédérique",110,"t","null en tout, bon en rien", [new Skill("sympa","🙂","http://www.groupsympa.com"),new Skill("fêtard","🥳","http://feteparty.com")])

ngOnInit() {
console.log(this.developer.Skill[0])}

}
