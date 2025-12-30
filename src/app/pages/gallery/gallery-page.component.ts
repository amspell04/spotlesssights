import { AfterViewInit, Component, Inject, PLATFORM_ID, signal } from "@angular/core";


import { NavBarComponent } from "../sections/navbar/navbar.component";

@Component({
    selector: 'app-gallery-page',
    imports: [ NavBarComponent,],
    standalone: true,
    templateUrl: './gallery-page.component.html',
    styleUrl: './gallery-page.component.scss',
})
export class GalleryPageComponent{

    public galleryImages = [
        '/imgs/gallery/gallery1.png',
        '/imgs/gallery/gallery2.png',
        '/imgs/gallery/gallery3.png',
        '/imgs/gallery/gallery4.png',
        '/imgs/gallery/gallery5.jpg',
        '/imgs/gallery/gallery6.jpg',
        '/imgs/gallery/gallery7.jpg',
        '/imgs/gallery/gallery8.jpg',
        '/imgs/gallery/gallery9.jpg',
        '/imgs/gallery/gallery10.jpg',
        '/imgs/gallery/gallery11.jpg',
        '/imgs/gallery/gallery12.jpg',
        '/imgs/gallery/gallery13.jpg',
        '/imgs/gallery/gallery14.jpg',
        '/imgs/gallery/gallery15.jpg',
        '/imgs/gallery/gallery16.jpg',
        '/imgs/gallery/gallery17.jpg',
        '/imgs/gallery/gallery18.jpg',
    ];
}