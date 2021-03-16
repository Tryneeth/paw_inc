import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private _pets:PetsService
  ) { 
    this.createForm()
  }

  ngOnInit(): void {
  }

  createForm(){
    this.formulario=this.fb.group({
      id:['', [Validators.required]],
      ic:['', [Validators.required]],
      state:['', [Validators.required]],
    })
  }


  sendForm(event:Event){
    event.preventDefault();
    if(this.formulario.valid){
      console.log(this.formulario.value);
      this.cat=this.formulario.value;

      this._pets.registerCat(this.cat).subscribe((data)=>console.log('Good'), (error)=>console.log(error));

      

    }
  }

}
