import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { GotService } from './got.service';
import {HttpClientModule} from '@angular/common/http';
import { CharactersComponent } from './characters/characters.component';
import { HousesComponent } from './houses/houses.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailViewComponent,
    CharactersComponent,
    HousesComponent,
    BooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'detail-view/:Id',component:DetailViewComponent},
      {path:'characters/:Id',component:CharactersComponent},
      {path:'houses/:Id',component:HousesComponent},
      {path:'books/:Id',component:BooksComponent}
    
    ])
  ],
  providers: [GotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
