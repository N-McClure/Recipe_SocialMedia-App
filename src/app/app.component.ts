import { Component } from '@angular/core';

//Imported By Me:
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'recipe_SocialMediaApp';
}
