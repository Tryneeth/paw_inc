import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/interfaces/cat.model';
import { Dog } from 'src/app/interfaces/dog.model';
import Swal from 'sweetalert2';
import { PetsService } from '../../services/pets.service';






@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  displayedColumnsCats: string[] = ['id', 'ic', 'state', 'actions'];
  displayedColumnsDogs: string[] = ['id', 'skills', 'state', 'actions'];
 

  cats:Cat[]=[];
  notReadyCats:Cat[]=[];
  readyCats:Cat[]=[];

  dogs:Dog[]=[];
  notReadyDogs:Dog[]=[];
  readyDogs:Dog[]=[];

  constructor(
    private _pets:PetsService
  ) { }

  ngOnInit(): void {
    this.fetchAllCats();
    this.fetchAllDogs();
  }

  fetchAllCats(){
     this._pets.getAllCats().subscribe((data:any)=>{
     
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
            'Dog has been deleted.',
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
              'Cat has been deleted.',
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
      this.notReadyCats.forEach((cat)=>{
      
          this._pets.registerCatCleansing(cat).subscribe((data)=>{
           this._pets.deleteCatAdoption(cat.id).subscribe((data)=>{
           
            let tempCats=[...this.cats];
            this.cats=tempCats.filter((cat)=>cat.ready===true);
          }, (error)=>{
            console.log('Error');
          }) 
        }, (error)=>{
          console.log('Error')
        })
      })
    }else{
      return null;
    }
}

sendDogsToCleansed(){
  if(this.notReadyDogs.length>0){

  

    this.notReadyDogs.forEach((dog)=>{
     
        this._pets.registerDogCleansing(dog).subscribe((data)=>{
         this._pets.deleteDogAdoption(dog.id).subscribe((data)=>{
       
          let tempDogs=[...this.dogs];
          this.dogs=tempDogs.filter((dog)=>dog.ready===true);
        }, (error)=>{
          console.log('Error');
        }) 
      }, (error)=>{
        console.log('Error')
      })
    })
  }else{
    return null;
  }
}

}