import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';


const routes: Routes = [
  { path: '' , redirectTo:'/countries', pathMatch:'full' },
  { path: 'countries' ,children:[{ path: '' , component:CountriesComponent },
  { path: ':code',component: CountryComponent }]
}];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ CountriesComponent, CountryComponent ]