import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  constructor() { }

  private registerUserUrl = 'http://localhost:8080/api/register';
  private loginUserUrl = 'http://localhost:8080/api/login';
  private getDataUrl = 'http://localhost:8080/api/getdata';
  private saveTapUrl = 'http://localhost:8080/api/save';

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

  public loginUser (user: {email: string, password: string}): Promise<any[]> {
    return fetch(this.loginUserUrl,
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

  public getDataFromToken(token: string): Promise<any[]> {
    return fetch(this.getDataUrl,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'x-access-token': token
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

  public saveTap(token: string, content: {id_user: string, score: number}): Promise<any[]> {
    return fetch(this.saveTapUrl,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'x-access-token': token
        },
        body: JSON.stringify(content)
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
