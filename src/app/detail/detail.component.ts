import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
@Input() prsn :Personne;
  constructor() { }

  ngOnInit(): void {
  }
  addRecrue(){}

}
