import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
  listePersonnes: Personne[];
  perSelected: Personne;
  constructor() { }

  ngOnInit(): void {
  }
  RecevoirPers(p){
    this.perSelected=p;
  }

}
