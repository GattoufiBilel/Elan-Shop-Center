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

const approot: Routes = [

{
  path : 'login' , component : LoginComponent
},

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
}


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
    NavbarComponent
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
