import { Component } from '@angular/core';
import { IMenu } from '../../../models/common.interface';
import { menuList } from './data/menu-list.data';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-menu',
  imports: [RouterModule, MatButtonModule],
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuList: IMenu[] = menuList;
}
