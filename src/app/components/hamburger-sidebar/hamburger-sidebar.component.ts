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
import { Router } from '@angular/router';
import { HelperService } from '../../services/helper.service';
import { FooterService } from '../../services/footer.service';

@Component({
  selector: 'app-hamburger-sidebar',
  templateUrl: './hamburger-sidebar.component.html',
  styleUrl: './hamburger-sidebar.component.scss',
  animations: [
    trigger('sidebarAnimation', [
      state('open', style({
        transform: 'translateX(0)'
      })),
      state('closed', style({
        transform: 'translateX(-300px)' // Adjust the value to match your sidebar width
      })),
      transition('open <=> closed', animate('0.3s ease'))
    ])
  ]
})
export class HamburgerSidebarComponent {

  isHamburgerClicked = false;

  constructor(
    public sidebarService : SidebarService,
    private router : Router,
    private helperService : HelperService,
    private footerService : FooterService){
  }

  ngOnInit(){
    this.footerService.isHamburgerClicked.subscribe(res => {
      this.isHamburgerClicked = res;
      console.log(res)
    })
  }

  navigateTo(path){
    if(path == 'HOME'){
      this.router.navigate([''])
    } else if(path == 'YOUR DAY'){
      this.router.navigate(['your-day']);
    } else if (path == 'WORKOUT SPOTS'){
      this.router.navigate(['map']);
    } else if (path == 'GYM ESSENTIALS'){
      this.router.navigate(['gym-essentials'])
    }
    this.helperService.scrollTo.next(path);
  }
}