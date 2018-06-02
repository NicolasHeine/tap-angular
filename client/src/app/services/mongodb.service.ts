import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  constructor() { }

  private getTasksUrl = 'http://localhost:8080/api/tasks';
  private editTaskUrl = 'http://localhost:8080/api/task';
  private registerUserUrl = 'http://localhost:8080/api/register';

  public getAllTasks (){
    return fetch(this.getTasksUrl,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(data => {
        return Promise.resolve(data);
      })
      // Traiter le réponse
      .then( data => data.json() )
      // Capter l'erreur
      .catch((err) => console.log(err) );
  }

  public addNewTask (newTask): Promise<any[]> {
    return fetch(this.editTaskUrl,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: newTask
      })
      .then(data => {
        return Promise.resolve(data);
      })
      // Traiter le réponse
      .then( data => data.json() )
      // Capter l'erreur
      .catch((err) => console.log(err) );
  }

  public registerUser (user: {firstName: string, lastName: string, email: string, password: string}): Promise<any[]> {
    return fetch(this.registerUserUrl,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(data => {
        return Promise.resolve(data);
      })
      // Traiter le réponse
      .then( data => data.json() )
      // Capter l'erreur
      .catch((err) => console.log(err) );
  }
}
