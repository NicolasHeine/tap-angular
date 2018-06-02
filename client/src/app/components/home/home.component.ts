import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../../services/mongodb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private mongodbService: MongodbService) { }

  private tasksCollection: any[];

  private showTasks(){

    // Appel de la fonction du service getAllTasks()
    this.mongodbService.getAllTasks().then(data => {

      // callBack => Injecter les données dans un tableau
      this.tasksCollection = data;

    });
  }

  ngOnInit() {
    this.showTasks()
  }

}
