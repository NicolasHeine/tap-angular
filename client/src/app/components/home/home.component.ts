import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../../services/mongodb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(
    private mongodbService: MongodbService,
    private router: Router
  ) { }

  userRegister = {
    firstName: 'Nicolas',
    lastName: 'Heine',
    email: 'nicolas.heine11@gmail.com',
    password: 'password'
  };

  cgv = false;

  userLogin = {
    email: '',
    password: ''
  };

  show_form = 'login';

  ngOnInit(){
    if(localStorage.getItem('token')){
      this.router.navigate(['/me']);
    }
    /*this.mongodbService.saveTap(sessionStorage.getItem('token'), {id_user: 'get from token', score: 50}).then(data => {
      console.log(data);
    });*/
  }

  onSubmitLogin(){
    this.mongodbService.loginUser(this.userLogin).then(user => {
      if(!user['error']){
        localStorage.setItem('token', user['token']);
        this.router.navigate(['/me'])
      }else{
        // error
      }
    });
  }

  onSubmitRegister(){
    this.mongodbService.registerUser(this.userRegister).then(user => {
      if(!user['error']){
        this.show_form = 'login';
      }else{
        console.log('error');
      }
    });
  }

}
