import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PetsService } from '../../services/pets.service';


@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class CatFormComponent implements OnInit {

  formulario:FormGroup;
  cat;
  

  constructor(
    private fb:FormBuilder,
    private _pets:PetsService,
    private router:Router
  ) { 
    this.createForm()
  }

  ngOnInit(): void {
  }

  createForm(){
    this.formulario=this.fb.group({
      id:['', [Validators.required]],
      ic:['', [Validators.required]],
      
    })
  }


  sendForm(event:Event){
    event.preventDefault();
    if(this.formulario.valid){
      console.log(this.formulario.value);
      let tempCat=this.formulario.value;
      tempCat={...tempCat, ready:false};
      this.cat=tempCat;

      this._pets.registerCat(this.cat).subscribe((data)=>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'The cat has been registered',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['adoption_center/pets_list']);
      }, (error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      });

      

    }
  }

}
