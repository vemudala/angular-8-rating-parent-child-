import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
@Input() rating:number=0;
arrayRating:Array<number>=[];
  constructor() { }

  ngOnInit() {
    console.log(this.rating);
  }
ngOnChanges(){
  console.log(this.rating);
  for(let index=0; index<this.rating; index++){
    this.arrayRating.push(index);
  }
}
}
