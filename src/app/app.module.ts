import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent }   from './app.component';
import { PostFormComponent } from "./posts/post-form";
import { OtherPostFormComponent } from "./posts/other-post-form";

@NgModule({
  declarations: [ AppComponent, PostFormComponent, OtherPostFormComponent ],
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
