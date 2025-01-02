import { Component } from '@angular/core';
import { IGame } from '../../../models/game.interface';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-relax-game',
  imports: [RouterModule, MatButtonModule, MatCardModule],
  templateUrl: './relax-game.component.html',
  styleUrl: './relax-game.component.scss'
})
export class RelaxGameComponent {
  gameList: IGame[] = []
}
