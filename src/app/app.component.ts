import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework53-app';
  newTask: string = '';
  tasks: string[] = ['task 1', 'task 2', 'task 3'];

  addTask() {
    if (this.newTask !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }
}
