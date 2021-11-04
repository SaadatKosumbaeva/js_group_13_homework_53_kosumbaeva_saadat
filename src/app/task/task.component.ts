import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: string = '';
  @Output() delete = new EventEmitter();

  onDeleteClick() {
    this.delete.emit();
  }
}
