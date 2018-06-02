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
  token: string = '';
  user = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  ngOnInit() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/']);
    }else{
      this.token = localStorage.getItem('token');
      this.mongodbService.getDataFromToken(this.token).then(data => {
        if(data['error']){
        }else{
          this.user = data['user'];
        }
      });
    }
  }

  start: boolean = false;
  finish: boolean = false;
  timer;
  count: number = 0;
  startGame(){
    if(!this.finish){
      if(this.start){ // Already launch
        this.score++;
      }else{ // Launch timer
        let that = this;
        this.start = true;
        this.score++;
        this.timer = setInterval(function(){
          that.count++;
          if(that.count === 10){
            that.finish = true;
            clearInterval(that.timer);
            that.sendScore();
          }
        },1000)
      }
    }
  }

  sendScore(){
    this.mongodbService.saveTap(sessionStorage.getItem('token'), {id_user: this.user._id, score: this.score}).then(data => {
      if(!data['error']){
        this.router.navigate(['/tap']);
      }
    });
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
