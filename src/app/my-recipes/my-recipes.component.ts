import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyRecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
