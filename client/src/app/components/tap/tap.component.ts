import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../../services/mongodb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styles: []
})
export class TapComponent implements OnInit {

  constructor(
    private mongodbService: MongodbService,
    private router: Router
  ) { }

  token: string;
  scores;

  ngOnInit() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/']);
    }else{
      this.token = localStorage.getItem('token');
      this.mongodbService.getScores(this.token).then(data => {
        if(data['error']){
        }else{
          this.scores = data['scores'].reverse();
        }
      });
    }
  }


  logOut(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
