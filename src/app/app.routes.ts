import { Routes } from '@angular/router';

export const routes: Routes = [
     {
        path: '',
        loadComponent: () =>
            import(
                './pages/home/home-page.component'
            ).then((m) => m.HomePageComponent),
    },
    {
        path: 'gallery',
        loadComponent: () =>
            import(
                './pages/gallery/gallery-page.component'
            ).then((m) => m.GalleryPageComponent),
    },
];
