import { Injectable } from '@angular/core';
//custom import according to need
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Injectable({
  providedIn: 'root'
})
export class GotService {
  //public variables to be used
  public allData: any;
  public currentData: any;
  public baseUrl = 'https://anapioficeandfire.com/api/';

  constructor(private _http: HttpClient) {
  }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }


//Function to get all the data to books,Houses and characters
  public getAllData(): any {
    let character = this._http.get(this.baseUrl + 'characters?page=1&pageSize=50').map(res => res);
    let house = this._http.get(this.baseUrl + 'houses?page=1&pageSize=50').map(res => res);
    let books = this._http.get(this.baseUrl + 'books?page=1&pageSize=12').map(res => res);
    let myresponse = Observable.forkJoin([books, character, house]);
    return myresponse;
  }
//Function to get the information of a single House according to HouseId/ unique Url
  public getSingleHouseInformation(currentHouseId): any {
    let myResponse = this._http.get(this.baseUrl + 'houses/' + currentHouseId);
    return myResponse;
  }
  //Function to get the information of a single book according to HouseId/ unique Url
  public getSingleBookInformation(currentBookId): any {
    let myResponse = this._http.get(this.baseUrl + 'books/' + currentBookId);
    return myResponse;
  }
  //Function to get the information of a single character according to HouseId/ unique Url
  public getSingleCharacterInformation(currentCharacterId): any {
    let myResponse = this._http.get(this.baseUrl + 'characters/' + currentCharacterId);
    return myResponse;
  }
}
