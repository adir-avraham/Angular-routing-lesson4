import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "countries", component: CountriesListComponent },
  { path: "home", component: HomeComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
