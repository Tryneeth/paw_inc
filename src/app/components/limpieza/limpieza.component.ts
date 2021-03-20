import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/interfaces/cat.model';
import { Dog } from 'src/app/interfaces/dog.model';
import { PetsService } from 'src/app/services/pets.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-limpieza',
  templateUrl: './limpieza.component.html',
  styleUrls: ['./limpieza.component.css']
})
export class LimpiezaComponent implements OnInit {

  catsCleansing:Cat[]=[];
  dogsCleansing:Dog[]=[];
  displayedColumnsCats: string[] = ['id', 'ic', 'state', 'actions'];
  displayedColumnsDogs: string[] = ['id',  'skills','state', 'actions'];

  constructor(
    private _pets:PetsService
  ) { }

  ngOnInit(): void {
    this.fetchAllCats();
    this.fetchAllDogs();
  }


  fetchAllCats(){
   this._pets.getCatsCleansing().subscribe((data)=>{
      this.catsCleansing=data;
    })
  }

  fetchAllDogs(){
   this._pets.getDogsCleansing().subscribe((data)=>{
      this.dogsCleansing=data;
    })
  }

  deleteDog(id:string){
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

  deleteCat(id:string){
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

 
  cleanCat(cat:Cat){
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

  cleanDog(dog:Dog){
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
      this.catsCleansing.forEach((cat)=>{
        this._pets.registerCatAdoption(cat).subscribe((data)=>{
          this._pets.deleteCatCleansing(cat.id).subscribe((data)=>{
             
              this.catsCleansing=[];
          }, (error)=>{
            console.log('Error')
          })
        }, (error)=>{
          console.log('Error')
        })
      })
    
    }else{
      return null;
    } 
}

sendDogsToAdoption(){
  if(this.dogsCleansing.length>0){
    this.dogsCleansing.forEach((dog)=>{
      this._pets.registerDogAdoption(dog).subscribe((data)=>{
        this._pets.deleteDogCleansing(dog.id).subscribe((data)=>{
           
            this.dogsCleansing=[];
        }, (error)=>{
          console.log('Error')
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
