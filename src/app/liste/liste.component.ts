import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() personnesList: Personne[]=[];
  @Output() persToCV= new EventEmitter<Personne>();
 
  constructor() { }

  ngOnInit(): void {
  }
  sendToCv(p){
    this.persToCV.emit(p)
  }
  showPersonnes(){
console.log(this.personnesList)
  } 
  }

