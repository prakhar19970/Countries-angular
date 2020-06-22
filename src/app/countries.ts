export interface CountriesInterface{
        name:string;
        population:number;
        capital:string;
        region:string;
        flag:string;
        alpha3Code:string;
}

export interface CountryInterface{
        population:number;
        name:string;   
        capital:string;
        region:string;
        flag:string;
        nativeName:string;
        subregion:string;
        topLevelDomain:string[];
        currencies:any[];
        languages:any[];
        borders:any[];
    }