import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 


@Component({
  selector: 'carousel-widget',
  templateUrl: './carousel.widget.html',
  imports: [MatIconModule, MatButtonModule],
  styleUrls: ['./carousel.widget.css']
})
export class CarouselWidget {
  @Input() title: string = '';
  @Input() value: string = '';
  photos: any = ["imgs/after3.jpg", "imgs/after1.jpg"]
  index: number = 0;



  decreaseind(){
    console.log("decreasing index")

        this.index -= 1 
    
}

    increaseind(){
        if(this.index < 2){
            this.index += 1 
        }
        console.log("increasing index")
    }


}
