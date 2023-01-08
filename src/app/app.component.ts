import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerAnimation', [
      // 定义 从一个状态到 另一个状态变化时的动画
      transition('one => two, one => three, two => three', [
        // 设置入场元素 入场前的 初始样式状态
        query(':enter', style({ transform: 'translateX(100%)', opacity: 0 })),

        // 一组动画 同时运行
        group([
          // 设置入场元素 入场后的 目标样式状态，和动画执行的时间 方式 等
          query(
            ':enter',
            animate(
              '0.4s ease-in',
              style({ transform: 'translateX(0)', opacity: 1 })
            )
          ),
          // 设置出场元素 出场后的 目标样式状态，和动画执行的时间 方式 等
          query(
            ':leave',
            animate(
              '0.4s ease-out',
              style({ transform: 'translateX(-100%)', opacity: 0 })
            )
          ),
        ]),
      ]),
      transition('two => one, three => one, three => two', [
        query(':enter', [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
        ]),
        group([
          query(':enter', [
            animate(
              '0.4s ease-in',
              style({ transform: 'translateX(0)', opacity: 1 })
            ),
          ]),
          query(':leave', [
            animate(
              '0.4s ease-in',
              style({ transform: 'translateX(100%)', opacity: 0 })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'ng-15-animation';

  prepare(outlet: RouterOutlet) {
    console.log('outlet: ', (<any>outlet.activatedRouteData).animation ?? '');
    return (<any>outlet.activatedRouteData).animation ?? '';
  }
}
