import { Component, HostListener } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import {
  trigger,
  state,
  style,
  animate, 
  transition
} from '@angular/animations'
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [
    trigger(
      'showSidebar', [
        state(
          'show',
          style({
            width: '300px',
            zIndex: 3,
          })
        ),
        state(
          'hide',
          style({
            width: '100px',
            zIndex: 3,
          })
        ),
        transition('show <=> hide', animate('300ms ease-in-out')),
      ],
    ),
    trigger(
      'showName', [
        state(
          'show',
          style({
            opacity: 1,
            zIndex: 1,
          })
        ),
        state(
          'hide',
          style({
            opacity: 0,
            zIndex: 1,
          })
        ),
        transition('show <=> hide', animate('300ms ease-in-out')),
      ],
    )
  ]
})
export class SidebarComponent {
  @HostListener('mouseenter')
  onMouseEnter() {
    this.showSidebar = true;
  }
  
  @HostListener('mouseleave')
  onMouseLeave() {
    this.showSidebar = false;
  }
  
  showSidebar = false;

  constructor(public sidebarService : SidebarService){

  }

  ngOnInit(){

  }
}