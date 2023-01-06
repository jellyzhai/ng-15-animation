import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, tap } from 'rxjs';
import { Todo } from '../interface/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @ViewChild('todoInput') todoInput!: ElementRef

  todos: Todo[] = []

  ngOnInit() {
    fromEvent(this.todoInput.nativeElement, 'mouseup').pipe(tap(console.log)).subscribe()
  }

  todoTrackBy(_:number, todo:Todo) {
    return todo.id;
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter(item => item.id !== id)
  }
}
