import { AnimationEvent } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, tap, filter, map } from 'rxjs';
import { slideAnimation, todoTitleAnimation } from 'src/app/animations/animation';
import { v4 as uuidv4 } from 'uuid';

import { Todo } from '../interface/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [slideAnimation, todoTitleAnimation],
})
export class TodoComponent implements OnInit, AfterViewInit {
  @ViewChild('todoInput') todoInput!: ElementRef;

  todos: Todo[] = [
    {
      id: uuidv4(),
      title: 'study',
    },
    {
      id: uuidv4(),
      title: 'exercise',
    },
    {
      id: uuidv4(),
      title: 'sleep',
    },
  ];

  ngOnInit() {}

  ngAfterViewInit() {
    fromEvent(this.todoInput.nativeElement, 'keyup')
      .pipe(
        filter((event) => (<KeyboardEvent>event).code === 'Enter'),
        map((event) => (<KeyboardEvent>event).target),
        map((element) => (<HTMLInputElement>element).value.trim()),
        filter((value) => !!value)
      )
      .subscribe((value) => {
        this.todos.unshift({
          id: uuidv4(),
          title: value,
        });
        this.todoInput.nativeElement.value = '';
      });
  }

  todoTrackBy(_: number, todo: Todo) {
    return todo.id;
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter((item) => item.id !== id);
  }

  slideStart(event: AnimationEvent) {
    // console.log('slideStart: ', event);
  }

  slideDone(event: AnimationEvent) {
    // console.log('slideDone: ', event);
  }
}
