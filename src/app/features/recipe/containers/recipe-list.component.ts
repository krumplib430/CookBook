import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
