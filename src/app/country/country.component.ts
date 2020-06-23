import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { CountryService } from '../country.service';
import { CountryInterface } from '../countries';
 
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {

  public countryCode='';
  public borderCountries=[];
  public country:CountryInterface;
 
  constructor(private route: ActivatedRoute,
    private router: Router,
    private _countryService:CountryService){  }

private _url:string= 'https://restcountries.eu/rest/v2/alpha/'
  
  ngOnInit(): void {

    this.countryCode = this.route.snapshot.params.code;

    if(this.countryCode.length){
    this.route.params.subscribe(routeParams => {
      this._countryService.getCountry(this._url+routeParams.code).subscribe(data =>{
          this.country=data;
          this.getborderCountries(this.country.borders)
          });   
        });
  }
}

  getborderCountries = (borderCountries) => {
    let url = 'https://restcountries.eu/rest/v2/alpha?codes='
    borderCountries.map((code, index) => {
        url = url + `${code.toLowerCase()};`;
        return url;
    })
    url = url + `&fields=name;alpha3Code`;
    return fetch(url, {
        method: 'GET'
    }).then(data => {
        if (data.ok) {
            return data.json();
        }
    }).then(responseData => {
        if(responseData!==undefined){
        this.borderCountries.push(responseData)
    }});
  }

}
