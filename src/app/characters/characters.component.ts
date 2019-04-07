import { Component, OnInit } from '@angular/core';

//Custom import to use parameter n route and Service
import { ActivatedRoute, Router } from '@angular/router';
import { GotService } from '../got.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {
  //global variable to store current character from api result.
  public currentCharacter;
  errorMessage: any;
  constructor(private _route: ActivatedRoute, private router: Router, private gotService: GotService) { }

  ngOnInit() {
    //get characterId from route
    let Id = this._route.snapshot.paramMap.get('Id');
    //call service function and assign its result to variable
    this.gotService.getSingleCharacterInformation(Id).subscribe(results => {
      this.currentCharacter = results;
      return this.currentCharacter;
    },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      });
  }

}
