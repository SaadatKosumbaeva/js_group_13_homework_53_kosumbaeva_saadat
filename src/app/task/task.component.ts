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
  focus = false;

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
}
