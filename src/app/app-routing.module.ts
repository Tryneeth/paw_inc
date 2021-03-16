import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdopcionComponent } from './components/adopcion/adopcion.component';
import { LimpiezaComponent } from './components/limpieza/limpieza.component';
import { PetsComponent } from './components/pets/pets.component';
import { CatFormComponent } from './components/cat-form/cat-form.component';
import { DogFormComponent } from './components/dog-form/dog-form.component';
import { ReadyComponent } from './components/ready/ready.component';

const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'adoption_center', component:AdopcionComponent, children:[
    {path:'pets_list', component:PetsComponent},
    {path:'cat_form', component:CatFormComponent},
    {path:'dog_form', component:DogFormComponent},
    {path:'healthy_pets', component:ReadyComponent},
    {path:'',pathMatch:'full', redirectTo:'pets_list'},
  
  ]},
  {path:'cleansing_center', component:LimpiezaComponent},
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'**', pathMatch:'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
