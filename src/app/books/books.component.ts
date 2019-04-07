import { Component, OnInit } from '@angular/core';
//custom imports
import {ActivatedRoute ,Router} from '@angular/router';
import { GotService } from '../got.service';
//decorators
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public currentBook;
  errorMessage: any;
  constructor(private _route:ActivatedRoute,private router:Router,private gotService:GotService) { }

  ngOnInit() {
    let Id=this._route.snapshot.paramMap.get('Id');
    this.gotService.getSingleBookInformation(Id).subscribe(results => {
   this.currentBook =results;
   return this.currentBook;
   //console.log(this.currentHouse);
    
  },
  error =>{
   console.log("some error occured");
   console.log(error.errorMessage)
 });
 
  }

}
