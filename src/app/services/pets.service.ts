import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../interfaces/cat.model';
import { Dog } from '../interfaces/dog.model';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

 

  catsUrl:string='http://localhost:3000/cats';
  dogsUrl:string='http://localhost:1000/dogs';
  cleansing_catsURL:string='http://localhost:5000/cats';
  cleansing_dogsURL:string='http://localhost:7000/dogs';
 
  constructor(
    private http:HttpClient
  ) { }


  getAllCats(){
    return this.http.get<Cat[]>(this.catsUrl);
  }

  getAllDogs(){
    return this.http.get<Dog[]>(this.dogsUrl);
  }

  registerCat(cat:Cat){
    return this.http.post(this.catsUrl,cat);
  }

  registerDog(dog:Dog){
    return this.http.post(this.dogsUrl, dog);
  }

  deleteDogAdoption(id:string){
    return this.http.delete(`${this.dogsUrl}/${id}`);
  }

  deleteCatAdoption(id:string){
    return this.http.delete(`${this.catsUrl}/${id}`);
  }

  deleteCatCleansing(id:string){
    return this.http.delete(`${this.cleansing_catsURL}/${id}`);
  }

  deleteDogCleansing(id:string){
    return this.http.delete(`${this.cleansing_dogsURL}/${id}`);
  }








  registerCatCleansing(cat:Cat){
   return this.http.post(this.cleansing_catsURL, cat);
  
  }

  registerDogCleansing(dog:Dog){
      return this.http.post(this.cleansing_dogsURL, dog);
  }

  registerCatAdoption(cat:Cat){
    return this.http.post(this.catsUrl, cat);
  }

  registerDogAdoption(dog:Dog){
     return this.http.post(this.dogsUrl, dog);
  }

  getCatsCleansing(){
    return this.http.get<Cat[]>(this.cleansing_catsURL);
  }

  getDogsCleansing(){
    return this.http.get<Dog[]>(this.cleansing_dogsURL);
  }

  updateCatState(id:string, update){
    return this.http.put(`${this.cleansing_catsURL}/${id}`, update)
  }

  updateDogState(id:string, update){
    return this.http.put(`${this.cleansing_dogsURL}/${id}`, update)
  }

 


}
