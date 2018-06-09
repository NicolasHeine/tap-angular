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
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  cgv: boolean = false;

  userLogin = {
    email: '',
    password: ''
  };

  show_form: string = 'login';

  ngOnInit(){
    if(localStorage.getItem('token')){
      this.router.navigate(['/me']);
    }
  }

  onSubmitLogin(){
    this.mongodbService.loginUser(this.userLogin).then(user => {
      if(!user['error']){
        localStorage.setItem('token', user['token']);
        this.router.navigate(['/me'])
      }else{
        console.log(user);
      }
    });
  }

  onSubmitRegister(){
    this.mongodbService.registerUser(this.userRegister).then(user => {
      if(!user['error']){
        this.show_form = 'login';
      }else{
        console.log(user);
      }
    });
  }

}
