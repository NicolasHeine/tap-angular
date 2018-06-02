import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../../services/mongodb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styles: []
})
export class MeComponent implements OnInit {

  constructor(
    private mongodbService: MongodbService,
    private router: Router
  ) { }

  // Data
  score: number = 0;
  id_user: string = '';
  token: string = '';
  user: object;

  ngOnInit() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/']);
    }else{
      this.token = localStorage.getItem('token');
      this.mongodbService.getDataFromToken(this.token).then(data => {
        if(!data['error']){
        }else{
          this.user = data['user'];
        }
      });
    }
  }

  sendScore(){
    this.mongodbService.saveTap(sessionStorage.getItem('token'), {id_user: this.id_user, score: this.score}).then(data => {
      console.log(data);
    });
  }

}
