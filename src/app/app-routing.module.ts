import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdopcionComponent } from './components/adopcion/adopcion.component';
import { LimpiezaComponent } from './components/limpieza/limpieza.component';

const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'adoption_center', component:AdopcionComponent},
  {path:'cleansing_center', component:LimpiezaComponent},
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'**', pathMatch:'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
