import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router,ParamMap} from '@angular/router';
import { CountryService } from '../country.service';
import { CountryInterface } from '../countries';
import { DarkmodeService } from '../darkmode.service';
// import { ActivatedRoute,ParamMap } from '@angular/router';
 
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {

  public countryCode='';
  public borderCountries=[];
  public country:CountryInterface;
  public darkMode;
 
  constructor(private route: ActivatedRoute,
    private router: Router,
    private _mode:DarkmodeService,
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

        this.route.paramMap.subscribe((params: ParamMap) => {
          this.darkMode=this._mode.getModeStatus();
        })
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
