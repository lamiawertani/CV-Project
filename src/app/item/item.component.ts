import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Personne } from '../personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() pers : Personne ; 
//={id:1,prenom:"wertani",nom:"lamia",age: 23,profession:"etudiante"}
@Output() perToList=new EventEmitter<Personne>();
  constructor() { }

  ngOnInit(): void {
  }
  sendPersonne(){
    this.perToList.emit(this.pers)
  }

}
