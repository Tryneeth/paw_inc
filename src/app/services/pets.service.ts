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



  deleteCatsAdoption(cats:Cat[]){
    let ids=cats.map((cat)=>cat.id);
    return ids.forEach(id => {
      this.http.delete(`${this.catsUrl}/${id}`).subscribe(); 
    
    });
  }

  deleteDogsAdoption(dogs:Dog[]){
    let ids=dogs.map((dog)=>dog.id);
    return ids.forEach(id => {
      this.http.delete(`${this.dogsUrl}/${id}`).subscribe(); 
    
    });
  }

  deleteCatsCleansing(cats:Cat[]){
    let ids=cats.map((cat)=>cat.id);
    return ids.forEach(id => {
      this.http.delete(`${this.cleansing_catsURL}/${id}`).subscribe(); 
     
    });
  }

  deleteDogsCleansing(dogs:Dog[]){
    let ids=dogs.map((dog)=>dog.id);
    return ids.forEach(id => {
      this.http.delete(`${this.cleansing_dogsURL}/${id}`).subscribe(); 
      
    });
  }


  registerCatsCleansing(cats:Cat[]){
    return cats.forEach(cat => {
      this.http.post(this.cleansing_catsURL, cat).subscribe();
    });
  }

  registerDogsCleansing(dogs:Dog[]){
    return dogs.forEach(dog => {
      this.http.post(this.cleansing_dogsURL, dog).subscribe();
    });
  }

  registerCatsAdoption(cats:Cat[]){
    return cats.forEach(cat => {
      this.http.post(this.catsUrl, cat).subscribe();
    });
  }

  registerDogsAdoption(dogs:Dog[]){
    return dogs.forEach(dog => {
      this.http.post(this.dogsUrl, dog).subscribe();
    });
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
