import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css']
})
export class MsWordComponent implements OnInit {
  name : string="lamia";
   clr: string="pink";
  hd :boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  showAlert(){
    alert('le bouton a ete cliqué')
  }
  hideShow(){
    this.hd= !this.hd;
  }
 

}
