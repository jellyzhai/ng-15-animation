import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, HomeComponent, NewsComponent } from './components/routes';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      animation: 'one',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      animation: 'two',
    },
  },
  {
    path: 'news',
    component: NewsComponent,
    data: {
      animation: 'three',
    },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
