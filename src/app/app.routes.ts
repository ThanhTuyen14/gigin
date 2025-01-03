import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'game',
    loadComponent: () =>
      import('./components/relax-game/relax-game.component').then(
        (c) => c.RelaxGameComponent
      ),
    children: [
      { path: '', redirectTo: 'list-game', pathMatch: 'full' },
      {
        path: 'list-game',
        loadComponent: () =>
          import('./components/relax-game/game-list/game-list.component').then(
            (c) => c.GameListComponent
          ),
      },
      {
        path: 'memory-card',
        loadComponent: () =>
          import(
            './components/relax-game/memory-game/memory-game.component'
          ).then((c) => c.MemoryGameComponent),
      },
      {
        path: 'mine-sweeper',
        loadComponent: () =>
          import(
            './components/relax-game/mine-sweeper/mine-sweeper.component'
          ).then((c) => c.MineSweeperComponent),
      },
    ],
  },
];
