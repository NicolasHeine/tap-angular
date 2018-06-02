import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../../services/mongodb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private mongodbService: MongodbService) { }

  user = {
    firstName: '',
    lastName: '',
    email: 'yolsdo@ea.Fr',
    password: 'test'
  };

  ngOnInit() {
    this.mongodbService.registerUser(this.user).then(user => {

      // callBack => Injecter les données dans un tableau
      //this.tasksCollection = data;
      console.log(user);
    });
  }

}
