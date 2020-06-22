import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../countries.service';
 
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {

  public countryCode;
  public country=[];
 
  constructor(private route: ActivatedRoute,
    private _countriesService:CountriesService){  }

private _url:string= 'https://restcountries.eu/rest/v2/alpha/'


  
  ngOnInit(): void {
    this.countryCode = this.route.snapshot.params.code;
    if(this.countryCode.length){
    this._url=this._url+this.countryCode

    this._countriesService.getCountry(this._url).subscribe(data =>{
      console.log(data), 
      this.country=data
      });   
    }
  }

}
