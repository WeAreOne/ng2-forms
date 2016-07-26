import { Component } from '@angular/core';

import { PostFormComponent } from './posts/post-form';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ PostFormComponent ]
})
export class AppComponent {
  title = 'app works!';
}
