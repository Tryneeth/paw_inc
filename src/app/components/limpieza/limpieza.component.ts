import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-limpieza',
  templateUrl: './limpieza.component.html',
  styleUrls: ['./limpieza.component.css']
})
export class LimpiezaComponent implements OnInit {

  catsCleansing:string[];
  dogsCleansing:string[];
  displayedColumnsCats: string[] = ['id', 'ic', 'state', 'actions'];
  displayedColumnsDogs: string[] = ['id', /* 'performance' */ 'state', 'actions'];

  constructor(
    private _pets:PetsService
  ) { }

  ngOnInit(): void {
    this.fetchAllCats();
    this.fetchAllDogs();
  }


  fetchAllCats(){
    this._pets.getCatsCleansing().subscribe((data:any)=>{
      this.catsCleansing=data;
    })
  }

  fetchAllDogs(){
    this._pets.getDogsCleansing().subscribe((data:any)=>{
      this.dogsCleansing=data;
    })
  }

  deleteDog(id){
    this._pets.deleteDogCleansing(id).subscribe((data)=>{
      this.fetchAllDogs();
    }, (error)=>console.log(error))
  }

  deleteCat(id){
    this._pets.deleteCatCleansing(id).subscribe((data)=>{
      this.fetchAllCats();
    }, (error)=>console.log(error))
  }

 
  cleanCat(cat){
    let updateCat={
     ...cat,
     ready:true
    }
    this._pets.updateCatState(cat.id, updateCat).subscribe(
      (data)=>{
       this.fetchAllCats();
      }
    );
    
  }

  cleanDog(dog){
    let updateDog={
     ...dog,
     ready:true
    }
    this._pets.updateDogState(dog.id, updateDog).subscribe(
      (data)=>{
       this.fetchAllDogs();
      }
    );
    
  }


  

}
