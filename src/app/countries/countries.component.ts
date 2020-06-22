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
        // this=this.filteredResult;
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



  
//  @Input() public parentData;
 

  // onClick(event){
  //   console.log(event);
  //   console.log('welcome to code evolution ');
  //   this.name="prakhar is here";
  // }