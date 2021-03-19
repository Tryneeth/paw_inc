import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/interfaces/cat.model';
import { Dog } from 'src/app/interfaces/dog.model';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.css']
})
export class ReadyComponent implements OnInit {


  displayedColumnsCats: string[] = ['id', 'ic'];
  displayedColumnsDogs: string[] = ['id',  'skills' ];

  readyCats:Cat[]=[];
  readyDogs:Dog[]=[];

  constructor(
    private _pets:PetsService
  ) { }

  ngOnInit(): void {

    this.fetchReadyCats();
    this.fetchReadyDogs();
  }

  fetchReadyCats(){
    this._pets.getAllCats().subscribe((data)=>{
      this.readyCats=data.filter((cat)=>cat.ready===true);
    })
  }


  fetchReadyDogs(){
    this._pets.getAllDogs().subscribe((data)=>{
      this.readyDogs=data.filter((dog)=>dog.ready===true);
    })
  }

}
