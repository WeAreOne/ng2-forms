import { Component } from '@angular/core';

import { PostFormComponent } from './posts/post-form';
import { OtherPostFormComponent } from './posts/other-post-form';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ PostFormComponent, OtherPostFormComponent ]
})
export class AppComponent {
  title = 'app works!';
}
