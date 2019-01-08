import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';
import { TodoListComponent } from './todo-list/todo-list.component';

import { InputEditorModule } from 'angular-inline-editors';
import { ProgressSpinnerComponent } from './common/progress-spinner/progress-spinner.component';
import { ProgressbarComponent } from './common/progressbar/progressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ProgressSpinnerComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InputEditorModule.forRoot()
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
