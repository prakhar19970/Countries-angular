import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private _countriesService:CountriesService) { }
 

  public countries=[];
  public filteredResult=[];
  public allCountries=[];
  public errorMsg;
  public searchValue='';

  searchCountry(countryName){
      if(countryName.length){
         this.countries=this.allCountries.filter(country=>{
            return country.name.toLowerCase().includes(countryName.toLowerCase());
        })
  }
  else{
   this.countries=this.allCountries;
  }
}

  filterRegion(region){
    if(region.length){
      this.countries=this.allCountries.filter(country=>{
        return country.region.toLowerCase() === region.toLowerCase()}) 
    }
    else{
  this.countries=this.allCountries;
  }
}

  ngOnInit(): void {
    this._countriesService.getCountries().subscribe(data =>{ 
    this.allCountries=data,
    this.countries=data,
    error=> this.errorMsg = error
    });   
 }

}
