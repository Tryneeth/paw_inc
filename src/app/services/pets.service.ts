import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  catsUrl:string='http://localhost:3000/cats';
  dogsUrl:string='http://localhost:1000/dogs';

  constructor(
    private http:HttpClient
  ) { }


  getAllCats(){
    return this.http.get<string[]>(this.catsUrl);
  }

  getAllDogs(){
    return this.http.get<string[]>(this.dogsUrl);
  }

}
