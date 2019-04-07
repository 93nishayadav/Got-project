import { Component, OnInit } from '@angular/core';
//custom imports
import { ActivatedRoute, Router } from '@angular/router';
import { GotService } from '../got.service';

//decorators
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  public currentHouse;
  errorMessage: any;
  constructor(private _route: ActivatedRoute, private router: Router, private gotService: GotService) { }

  ngOnInit() {
    //get Id part/Unique no from the html file
    let Id = this._route.snapshot.paramMap.get('Id');
    //call the function from gotservice by passing Id as parameter 
    this.gotService.getSingleHouseInformation(Id).subscribe(results => {
      //set result into public variable 
      this.currentHouse = results;
      return this.currentHouse;
    },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      });
  }


}
