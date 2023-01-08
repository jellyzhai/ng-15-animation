import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AboutComponent, NewsComponent, HomeComponent],
  imports: [CommonModule],
})
export class RouteComponentsModule {}
