import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { HomeComponent } from './componentes/home/home.component';
import { P404Component } from './componentes/p404/p404.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'contactenos',component:ContactenosComponent},
  {path:'**',component:P404Component,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


