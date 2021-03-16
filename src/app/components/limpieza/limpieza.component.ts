import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-limpieza',
  templateUrl: './limpieza.component.html',
  styleUrls: ['./limpieza.component.css']
})
export class LimpiezaComponent implements OnInit {

  catsCleansed:string[];
  displayedColumnsCats: string[] = ['id', 'ic', 'state'];
  displayedColumnsDogs: string[] = ['id', /* 'performance' */ 'state', 'actions'];

  constructor(
    private _pets:PetsService
  ) { }

  ngOnInit(): void {
    
  }


  

}
