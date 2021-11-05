import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework53-app';
  task = '';
  tasks = [
    {task: 'task 1'},
    {task: 'task 2'},
    {task: 'task 3'},
  ];
  completedTasks: { task: string }[] = [];

  addTask(event: Event) {
    event.preventDefault();
    if (this.task.trim().length) {
      this.tasks.push({task: this.task});
      this.task = '';
    }
  }

  onDeleteTask(i: number) {
    this.tasks.splice(i, 1);
  }

  changeTask(index: number, newTask: string) {
    this.tasks[index].task = newTask;
  }

  checkTask(index: number, checked: boolean) {
    if (checked) {
      this.completedTasks.push(this.tasks[index]);
    } else {
      const completedArrIndex = this.completedTasks.indexOf(this.tasks[index]);
      this.completedTasks.splice(completedArrIndex, 1);
    }
  }
}
