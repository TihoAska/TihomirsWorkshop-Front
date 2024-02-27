import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AddWindowComponent } from './components/add-window/add-window.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'add',
        component: AddWindowComponent,
        children: [
          {
            path: 'meal',
            component: AddWindowComponent,
          },
          {
            path: 'workout',
            component: AddWindowComponent,
          }
        ]
      }
    ]
  },
  {
    path: 'map',
    component: MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
