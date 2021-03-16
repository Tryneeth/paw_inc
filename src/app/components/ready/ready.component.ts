import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.css']
})
export class ReadyComponent implements OnInit {


  displayedColumnsCats: string[] = ['id', 'ic'];
  displayedColumnsDogs: string[] = ['id', /* 'performance' */ ];

  readyCats;
  readyDogs;

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
