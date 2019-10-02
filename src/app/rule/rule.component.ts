import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent implements OnInit {
  eyeO:string;
  eyeC:string;
 showR:boolean;

  constructor() { }

  ngOnInit() {
    this.showR= true;
    this.eyeO= "far fa-eye";
  this.eyeC = "far fa-eye-slash";
  }



}



