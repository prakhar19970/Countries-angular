import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private _mode:DarkmodeService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

public darkMode;
public _url;

 activateDarkMode(){

  this.getCurrenturl()
  if(sessionStorage.getItem('mode')==='dark'){
    this.darkMode=false;
    sessionStorage.setItem('mode','light');
    this.router.navigate([this._url,{mode:this.darkMode}])
  }
  else{
    this.darkMode=true;
   sessionStorage.setItem('mode','dark');
   this.router.navigate([this._url,{mode:this.darkMode}])
  }
}

getCurrenturl(){

  if(this.location.path().substring(0,this.location.path().indexOf(';'))){
    this._url=this.location.path().substring(0,this.location.path().indexOf(';'));
    }
    else{
      this._url=this.location.path();
    }
}

  ngOnInit(): void {
      this.darkMode=this._mode.getModeStatus();
  }

}
