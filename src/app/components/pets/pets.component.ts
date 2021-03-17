import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service';






@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  displayedColumnsCats: string[] = ['id', 'ic', 'state', 'actions'];
  displayedColumnsDogs: string[] = ['id', /* 'performance' */ 'state', 'actions'];
 

  cats=[];
  notReadyCats=[];
  readyCats=[];

  dogs=[];
  notReadyDogs=[];
  readyDogs=[];

  constructor(
    private _pets:PetsService
  ) { }

  ngOnInit(): void {
    this.fetchAllCats();
    this.fetchAllDogs();
  }

  fetchAllCats(){
    this._pets.getAllCats().subscribe((data:any)=>{
      console.log(data);
      this.cats=data;
      this.notReadyCats=this.cats.filter((cat)=>cat.ready===false);
      this.readyCats=this.cats.filter((cat)=>cat.ready===true);
    }, (error)=>{
      console.log(error);
    })
  }

    fetchAllDogs(){
    this._pets.getAllDogs().subscribe((data:any)=>{
      console.log(data);
      this.dogs=data;
      this.notReadyDogs=this.dogs.filter((dog)=>dog.ready===false);
      this.readyDogs=this.dogs.filter((dog)=>dog.ready===true);
    }, (error)=>{
      console.log(error);
    })
  }


  deleteDog(id){
    this._pets.deleteDogAdoption(id).subscribe((data)=>{
      this.fetchAllDogs();
    }, (error)=>console.log(error))
  }

    deleteCat(id){
    this._pets.deleteCatAdoption(id).subscribe((data)=>{
      this.fetchAllCats();
    }, (error)=>console.log(error))
  }

  sendCatsToCleansed(){
    if(this.notReadyCats.length>0){
      this._pets.registerCatsCleansing(this.notReadyCats)
      this._pets.deleteCatsAdoption(this.notReadyCats);
      this.notReadyCats=[];
      this.fetchAllCats();
    }else{
      return null;
    }
}

sendDogsToCleansed(){
  if(this.notReadyDogs.length>0){
    this._pets.registerDogsCleansing(this.notReadyDogs)
    this._pets.deleteDogsAdoption(this.notReadyDogs);
    this.notReadyDogs=[];
    this.fetchAllDogs();
  }else{
    return null;
  }
}

}