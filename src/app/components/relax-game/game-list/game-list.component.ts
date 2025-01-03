import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { IGame } from '../../../../models/game.interface';

@Component({
  selector: 'app-game-list',
  imports: [RouterModule, MatButtonModule, MatCardModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss',
})
export class GameListComponent {
  gameList: IGame[] = [
    {
      id: 1,
      name: 'Memory Card',
      description: 'Lật bài để tìm cặp hình giống nhau',
      link: '/game/memory-card',
      img: '',
    },
    {
      id: 2,
      name: 'Mine Sweeper',
      description: 'dò mìn',
      link: '/game/mine-sweeper',
      img: '',
    },
  ];
}
