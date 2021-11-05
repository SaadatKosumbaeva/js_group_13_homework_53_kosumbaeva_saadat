import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task = '';
  @Output() taskChange = new EventEmitter<string>();
  @Output() delete = new EventEmitter();
  @Output() taskCheck = new EventEmitter<boolean>();

  focus = false;
  checked = false;

  onDeleteClick() {
    this.delete.emit();
  }

  onTaskChange(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.taskChange.emit(target.value);
  }

  onInputFocus() {
    this.focus = true;
  }

  onInputBlur() {
    this.focus = false;
  }

  borderSettings() {
    return this.focus ? {borderBottom: '1px solid black'} : null;
  }

  onInputChecked() {
    this.checked = !this.checked;
    this.taskCheck.emit(this.checked);
  }

  textDecorationSettings() {
    return this.checked ? 'task-input input-text' : 'task-input';
  }
}
