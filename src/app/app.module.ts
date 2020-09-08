import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule , Routes} from '@angular/router';
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
import { NavigationComponent } from './navigation/navigation.component';
import { QuisommesnousComponent } from './quisommesnous/quisommesnous.component';
import { HeadComponent } from './head/head.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { GestionUsersComponent } from './backend/gestion-users/gestion-users.component';
import { EspaceComponent } from './backend/espace/espace.component';
import { AddUserComponent } from './backend/gestion-users/add-user/add-user.component';


// Imported syncfusion sidebar module from navigations package

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
      },
      {
      path :  'navigation' , component : NavigationComponent
      },

      {
        path : 'quisommenous' , component : QuisommesnousComponent
      },
      {
        path : 'head' , component : HeadComponent
      }


    ]},

    {
      path : 'login' , component : LoginComponent
    },

    {
      path : 'admin' , component : DashboardComponent
    },

    {
      path : 'es' , component : EspaceComponent , children : [


    {
      path : 'users' , component : GestionUsersComponent
    },

    {
      path : 'adduser' , component : AddUserComponent
    },
  ]},


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
    NavigationComponent,
    QuisommesnousComponent,
    HeadComponent,
    DashboardComponent,
    GestionUsersComponent,
    EspaceComponent,
    AddUserComponent,



  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(approot),
    BrowserModule,
    // Registering EJ2 Sidebar Module




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
