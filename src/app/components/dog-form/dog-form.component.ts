import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dog } from 'src/app/interfaces/dog.model';
import { PetsService } from 'src/app/services/pets.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent implements OnInit {

  formulario:FormGroup;
  dog:Dog;

  
  

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
      skills:this.fb.array([])
    
   
    })
  }


  sendForm(event:Event){
    event.preventDefault();
    if(this.formulario.valid){
     console.log(this.formulario.value);
   
      let tempDog=this.formulario.value;
      tempDog={...tempDog, ready:false};
      this.dog=tempDog;
      this._pets.registerDog(this.dog).subscribe((data)=>{
        Swal.fire({
          position:'center',
          icon: 'success',
          title: 'The dog has been registered',
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

  onChange(name:string, isChecked:boolean){
    const actions=this.formulario.controls.skills as FormArray;
    if(isChecked){
      actions.push(new FormControl(name));}
      else{
        const index=actions.controls.findIndex(x=>x.value===name);
        actions.removeAt(index);
      }
    }



  }

  




