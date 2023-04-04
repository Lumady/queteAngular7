import { Component } from '@angular/core';
import { Skill } from '../model/skill.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent{

  @Input() skilll?: Skill;

}
