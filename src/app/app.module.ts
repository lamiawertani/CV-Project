import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { DirectComponent } from './direct/direct.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { CVComponent } from './cv/cv.component';
import { ItemComponent } from './item/item.component';
import { ListeComponent } from './liste/liste.component';
import { LamiaComponent } from './lamia/lamia.component';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [
    AppComponent,
    MsWordComponent,
    DirectComponent,
    DetailComponent,
    CVComponent,
    ItemComponent,
    ListeComponent,
    LamiaComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
