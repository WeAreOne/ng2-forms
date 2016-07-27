import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Post } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'other-post-form',
  templateUrl: 'other-post-form.component.html',
  styleUrls: ['other-post-form.component.css'],
  directives: [ REACTIVE_FORM_DIRECTIVES ]
})
export class OtherPostFormComponent {
  categories = [ 'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5' ];
  model = new Post(1, 'This is my post title', 'Lorem ipsum dolor sit amet...', this.categories[0], 'My tag');
  submitted = false;

  constructor(private fb: FormBuilder) { }

  onSubmit() { this.submitted = true; }
}
