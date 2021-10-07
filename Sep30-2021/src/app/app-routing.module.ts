import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'contactenos',component:ContactenosComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
