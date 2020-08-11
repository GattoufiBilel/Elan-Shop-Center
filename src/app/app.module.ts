import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule , Routes} from '@angular/router';
import { ContacteznousComponent } from './contacteznous/contacteznous.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContenuComponent } from './contenu/contenu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SidebareComponent } from './sidebare/sidebare.component';
import { MenuComponent } from './menu/menu.component';
import { PatissiersListComponent } from './produits/patisssiers/patissiers-list/patissiers-list.component';
import { ArtsListComponent } from './produits/artisanaux/arts-list/arts-list.component';

const approot: Routes = [

      {
    path : '' , component : MenuComponent, children: [


      {
        path : 'contactez' , component : ContacteznousComponent
      },

      {
        path : 'accueil' , component : AccueilComponent
      },

      {
        path : 'header' , component : HeaderComponent
      },

      {
        path : 'navbar' , component : NavbarComponent
      },

      {
        path : 'contenu' , component : ContenuComponent
      },

      {
        path : 'footer' , component : FooterComponent
      },

      {
        path : 'sidebare' , component : SidebareComponent
      },
      {
        path : 'artslist' , component : ArtsListComponent
      },
      {
        path : 'patlist' , component : PatissiersListComponent
      }

    ]},




{
  path : 'login' , component : LoginComponent
},
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContacteznousComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    ContenuComponent,
    NavbarComponent,
    SidebareComponent,
    MenuComponent,
    PatissiersListComponent,
    ArtsListComponent,


  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(approot)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
