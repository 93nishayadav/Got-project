import { Component, OnInit } from '@angular/core';
//custom import according to the need 
import { GotService } from '../got.service';
//decorators
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public allDataq: object;
  errorMessage: any;

  constructor(private gotService: GotService) {
  }

  ngOnInit() {
    //service call to get all data from server through api
    this.gotService.getAllData().subscribe(results => {
      // results[0] is books data from server
      // results[1] is characters data from server
      // results[2] is houses data from server
      this.allDataq = [].concat(results[0], results[1], results[2]);
      return this.allDataq
    },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    );
  }
}
