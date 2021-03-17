import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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
      if(data){
        this.cats=data;
        this.notReadyCats=this.cats.filter((cat)=>cat.ready===false);
        this.readyCats=this.cats.filter((cat)=>cat.ready===true);
      }else{
        this.cats=[];
        this.notReadyCats=[];
        this.readyCats=[];
      }
    
    }, (error)=>{
      console.log(error);
    })
  }

    fetchAllDogs(){
    this._pets.getAllDogs().subscribe((data:any)=>{
      console.log(data);
      if(data){
      this.dogs=data;
      this.notReadyDogs=this.dogs.filter((dog)=>dog.ready===false);
      this.readyDogs=this.dogs.filter((dog)=>dog.ready===true);
      }else{
        this.dogs=[];
        this.notReadyDogs=[];
        this.readyDogs=[];
      }
    }, (error)=>{
      console.log(error);
    })
  }


  deleteDog(id){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._pets.deleteDogAdoption(id).subscribe((data)=>{
          Swal.fire(
            'Deleted!',
            'Cat has been deleted.',
            'success'
          )
          this.fetchAllDogs();
        }, (error)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
         
          })
        })
      
      }
    })
   
  }

    deleteCat(id){
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this._pets.deleteCatAdoption(id).subscribe((data)=>{
            Swal.fire(
              'Deleted!',
              'Dog has been deleted.',
              'success'
            )
            this.fetchAllCats();
          }, (error)=>{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              
            })
          })
       
        }
      })
 
  }

  sendCatsToCleansed(){
    if(this.notReadyCats.length>0){
      this._pets.registerCatsCleansing(this.notReadyCats)
      this._pets.deleteCatsAdoption(this.notReadyCats);
      let tempCats=[...this.cats];
      this.cats=tempCats.filter((cat)=>cat.ready===true);
    }else{
      return null;
    }
}

sendDogsToCleansed(){
  if(this.notReadyDogs.length>0){
    this._pets.registerDogsCleansing(this.notReadyDogs)
    this._pets.deleteDogsAdoption(this.notReadyDogs);
    let tempDogs=[...this.dogs];
    this.dogs=tempDogs.filter((dog)=>dog.ready===true);
  }else{
    return null;
  }
}

}