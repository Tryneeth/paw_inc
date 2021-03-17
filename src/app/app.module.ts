import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdopcionComponent } from './components/adopcion/adopcion.component';
import { LimpiezaComponent } from './components/limpieza/limpieza.component';

import { LayoutModule } from '@angular/cdk/layout';

import { CatFormComponent } from './components/cat-form/cat-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PetsComponent } from './components/pets/pets.component';
import { DogFormComponent } from './components/dog-form/dog-form.component';
import { ReadyComponent } from './components/ready/ready.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdopcionComponent,
    LimpiezaComponent,
   
    CatFormComponent,
    PetsComponent,
    DogFormComponent,
    ReadyComponent,
   
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
