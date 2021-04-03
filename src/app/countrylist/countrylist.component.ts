import { Component, OnInit } from '@angular/core';
import { HttpDataService } from '../httpdata.service';


@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {
  userdata:any
  states:string
  searchText = '';
  new:any
  constructor(private httpreq:HttpDataService) {
  
   }

  ngOnInit(): void {
    this.httpreq.getCountry().subscribe((res:any)=>{
      console.log("Get",res);
       this.userdata = res.countries;
      console.log(this.userdata)
      });
  }
  getState(){
    this.httpreq.getState().subscribe((res:any)=>{
      console.log("state",res);
      this.states = res.data.name;
      console.log(this.states)

    })
  }
}
