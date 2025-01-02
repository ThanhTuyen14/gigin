import { Component } from '@angular/core';
import { menuList } from '../../layout/menu/data/menu-list.data';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { IMenu } from '../../../models/common.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [RouterModule, MatButtonModule]
})
export class HomeComponent {
  menuList: IMenu[] = menuList;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.menuList[0].hide = event.url == '/home';
      }
    });
  }
}
