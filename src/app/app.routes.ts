import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(
            (c) => c.HomeComponent
        ),
    },
    {
        path: 'game-list',
        loadComponent: () => import('./components/relax-game/relax-game.component').then(
            (c) => c.RelaxGameComponent
        ),
    },
];
