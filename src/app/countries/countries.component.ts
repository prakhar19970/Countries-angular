import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { DarkmodeService } from '../darkmode.service';
import { ActivatedRoute,ParamMap } from '@angular/router';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private _countriesService:CountriesService,
    private _mode:DarkmodeService,
    private route: ActivatedRoute) { }
 

  public countries=[];
  public darkMode;
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

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.darkMode=this._mode.getModeStatus();
    })
 }

}
