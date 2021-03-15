import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  catsUrl:string='http://localhost:3000/cats';

  constructor(
    private http:HttpClient
  ) { }


  getAllCats(){
    return this.http.get(this.catsUrl);
  }

}
