import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  catsAdoption:string[];

  catsUrl:string='http://localhost:3000/cats';
  dogsUrl:string='http://localhost:1000/dogs';
  cleansing_catsURL:string='http://localhost:5000/cats';
  cleansing_dogsURL:string='http://localhost:7000/dogs';
 
  constructor(
    private http:HttpClient
  ) { }


  getAllCats(){
    return this.http.get<string[]>(this.catsUrl);
  }

  getAllDogs(){
    return this.http.get<string[]>(this.dogsUrl);
  }

  registerCat(cat){
    return this.http.post(this.catsUrl,cat);
  }

  registerDog(dog){
    return this.http.post(this.dogsUrl, dog);
  }

  deleteDogAdoption(id){
    return this.http.delete(`${this.dogsUrl}/${id}`);
  }

  deleteCatAdoption(id){
    return this.http.delete(`${this.catsUrl}/${id}`);
  }

  deleteCatCleansing(id){
    return this.http.delete(`${this.cleansing_catsURL}/${id}`);
  }

  deleteDogCleansing(id){
    return this.http.delete(`${this.cleansing_dogsURL}/${id}`);
  }

  storeCats(cats){
    this.catsAdoption=cats;
    console.log(this.catsAdoption);
  }

  deleteCatsAdoption(cats){
    let ids=cats.map((cat)=>cat.id);
    return ids.forEach(id => {
      this.http.delete(`${this.catsUrl}/${id}`).subscribe(); 
      console.log(id);
    });
  }

  deleteDogsAdoption(dogs){
    let ids=dogs.map((dog)=>dog.id);
    return ids.forEach(id => {
      this.http.delete(`${this.dogsUrl}/${id}`).subscribe(); 
      console.log(id);
    });
  }

  registerCatsCleansing(cats){
    return cats.forEach(cat => {
      this.http.post(this.cleansing_catsURL, cat).subscribe();
    });
  }

  registerDogsCleansing(dogs){
    return dogs.forEach(dog => {
      this.http.post(this.cleansing_dogsURL, dog).subscribe();
    });
  }

  getCatsCleansing(){
    return this.http.get(this.cleansing_catsURL);
  }

  getDogsCleansing(){
    return this.http.get(this.cleansing_dogsURL);
  }

 


}
