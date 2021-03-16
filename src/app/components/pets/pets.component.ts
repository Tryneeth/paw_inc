import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}





@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  displayedColumnsCats: string[] = ['id', 'ic', 'state', 'actions'];
  displayedColumnsDogs: string[] = ['id', /* 'performance' */ 'state', 'actions'];
 

  cats:string[];
  dogs:string[];

  constructor(
    private pets:PetsService
  ) { }

  ngOnInit(): void {
    this.fetchAllCats();
    this.fetchAllDogs();
  }

  fetchAllCats(){
    this.pets.getAllCats().subscribe((data)=>{
      console.log(data);
      this.cats=data;
    }, (error)=>{
      console.log(error);
    })
  }

    fetchAllDogs(){
    this.pets.getAllDogs().subscribe((data)=>{
      console.log(data);
      this.dogs=data;
    }, (error)=>{
      console.log(error);
    })
  }

}
