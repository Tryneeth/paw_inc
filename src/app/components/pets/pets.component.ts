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
 

  cats:string[];
  dogs:string[];

  constructor(
    private _pets:PetsService
  ) { }

  ngOnInit(): void {
    this.fetchAllCats();
    this.fetchAllDogs();
  }

  fetchAllCats(){
    this._pets.getAllCats().subscribe((data)=>{
      console.log(data);
      this.cats=data;
    }, (error)=>{
      console.log(error);
    })
  }

    fetchAllDogs(){
    this._pets.getAllDogs().subscribe((data)=>{
      console.log(data);
      this.dogs=data;
    }, (error)=>{
      console.log(error);
    })
  }


  deleteDog(id){
    this._pets.deleteDog(id).subscribe((data)=>{
      this.fetchAllDogs();
    }, (error)=>console.log(error))
  }

    deleteCat(id){
    this._pets.deleteCat(id).subscribe((data)=>{
      this.fetchAllCats();
    }, (error)=>console.log(error))
  }

  sendCatsToCleansed(){
    if(this.cats.length>0){
      let ids=this.cats.map((cat)=>cat.id);
      this._pets.deleteCatsAdoption(ids);
      this.cats=[];
    }else{
      return null;
    }
}

sendDogsToCleansed(){
  if(this.dogs.length>0){
    let ids=this.dogs.map((dog)=>dog.id);
    this._pets.deleteDogsAdoption(ids);
    this.dogs=[];
  }else{
    return null;
  }
}

}