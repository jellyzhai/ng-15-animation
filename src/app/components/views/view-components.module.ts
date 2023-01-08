import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { CustomStateAnimationComponent } from './custom-state-animation/custom-state-animation.component';



@NgModule({
  declarations: [TodoComponent, CustomStateAnimationComponent],
  exports: [TodoComponent, CustomStateAnimationComponent],
  imports: [CommonModule],
})
export class ViewComponentsModule {}
