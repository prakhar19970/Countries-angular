import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';


const routes: Routes = [
  { path: 'countries' ,component:CountriesComponent },
  { path: 'countries/:code',component: CountryComponent },
  { path: '' , redirectTo:'/countries', pathMatch:'full' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ CountriesComponent, CountryComponent ]