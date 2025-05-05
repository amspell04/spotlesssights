import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'review-widget',
  templateUrl: './review.widget.html',
  imports: [MatIconModule, MatButtonModule, MatCardModule],
  standalone: true,
  styleUrls: ['./review.widget.css']
})
export class ReviewWidget{
  photos: any = ["imgs/after3.jpg", "imgs/after1.jpg", "imgs/gallery1.png", "imgs/gallery2.png", "imgs/gallery3.png", "imgs/gallery4.png"]
  index: number = 0;
  intervalid: any;
  autoRunning: boolean = false; // Flag to track if auto is running


}

