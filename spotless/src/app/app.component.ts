import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CarouselWidget } from '../carousel.widget/carousel.widget';

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, CarouselWidget],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'spotless';
  currimage: string = "";
  photos = ["imgs/after1.jpg", "imgs/after2.jpg", "imgs/after3.jpg"]
  index = 0;
}

