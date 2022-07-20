import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    title: 'Services',
  }, // /services
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  }, // /about
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  }, // /contact
  {
    path: 'home',
    redirectTo: '/',
    pathMatch: 'full',
  }, // /home - /services
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not found',
  }, // /not-found
];

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
