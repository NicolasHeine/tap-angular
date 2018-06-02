import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../../services/mongodb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private mongodbService: MongodbService) { }

  userRegister = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  userLogin = {
    email: '',
    password: ''
  };

  ngOnInit() {
    /*this.mongodbService.loginUser(this.user).then(user => {
      if(!user['error']){
        localStorage.setItem('token', user['token']);
        localStorage.setItem('id', user['id']);
      }else{
        // error
      }
    });*/

    this.mongodbService.saveTap(sessionStorage.getItem('token'), {id_user: localStorage.getItem('id'), score: 50}).then(data => {
      console.log(data);
    });
  }

}
