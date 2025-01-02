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
        path: 'game',
        loadComponent: () => import('./components/relax-game/relax-game.component').then(
            (c) => c.RelaxGameComponent
        ),
        children: [
            {
                path: 'memory-card',
                loadComponent: () => import('./components/relax-game/memory-game/memory-game.component').then(
                    (c) => c.MemoryGameComponent
                ),
            }
        ]
    },
];
