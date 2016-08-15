import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Post } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'other-post-form',
  templateUrl: 'other-post-form.component.html',
  styleUrls: ['other-post-form.component.css']
})
export class OtherPostFormComponent {
  START_TITLE = 'Title: ';
  categories = [ 'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5' ];
  model = new Post(1, 'This is my post title', 'Lorem ipsum dolor sit amet...', this.categories[0], 'My tag');
  submitted = false;
  postForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.postForm = fb.group({
      title: fb.control(this.model.title, Validators.compose([ Validators.required, this.titleValidator ])),
      text: fb.control(this.model.text, Validators.required),
      category: fb.control(this.model.category),
      tag: fb.control(this.model.tag)
    })
  }

  // postForm.controls.title.hasError('invalidTitle')
  titleValidator = (control: FormControl): { [ s: string ]: boolean } => {
    if (control.value.substring(0, this.START_TITLE.length) !== this.START_TITLE) {
      return { invalidTitle: true };
    }
  };

  isValid = (field: FormControl) => field.valid || field.pristine;

  onSubmit(formValue) {
    Object.assign(this.model, this.model, formValue);
    this.submitted = true ;
  }
}
