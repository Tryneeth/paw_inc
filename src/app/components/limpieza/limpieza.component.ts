import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-limpieza',
  templateUrl: './limpieza.component.html',
  styleUrls: ['./limpieza.component.css']
})
export class LimpiezaComponent implements OnInit {

  catsCleansing:string[]=[];
  dogsCleansing:string[]=[];
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
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._pets.deleteDogCleansing(id).subscribe((data)=>{
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
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
        this._pets.deleteCatCleansing(id).subscribe((data)=>{
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
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

  cleanAllCats(){
    return this.catsCleansing.forEach((cat)=>{
      this.cleanCat(cat)
    })
  }

  cleanAllDogs(){
    return this.dogsCleansing.forEach((dog)=>{
      this.cleanDog(dog)
    })
  }


  sendCatsToAdoption(){
    if(this.catsCleansing.length>0){
      this._pets.registerCatsAdoption(this.catsCleansing)
      this._pets.deleteCatsCleansing(this.catsCleansing);
      this.catsCleansing=[];
    }else{
      return null;
    }
}

sendDogsToAdoption(){
  if(this.dogsCleansing.length>0){
    this._pets.registerDogsAdoption(this.dogsCleansing)
    this._pets.deleteDogsCleansing(this.dogsCleansing);
    this.dogsCleansing=[];
  }else{
    return null;
  }
}



  

}
