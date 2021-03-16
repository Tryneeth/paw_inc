import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent implements OnInit {

  formulario:FormGroup;
  dog;
  

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
      state:['', [Validators.required]],
     /*  performance:this.fb.array([]) */
    })
  }


  sendForm(event:Event){
    event.preventDefault();
    if(this.formulario.valid){
      console.log(this.formulario.value);
      this.dog=this.formulario.value;
      this._pets.registerDog(this.dog).subscribe((data)=>{
        console.log('Good');
        this.router.navigate(['adoption_center/pets_list']);
      }, (error)=>console.log(error));

      

    }
  }

}

