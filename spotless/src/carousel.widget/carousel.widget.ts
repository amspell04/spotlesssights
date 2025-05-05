import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 


@Component({
  selector: 'carousel-widget',
  templateUrl: './carousel.widget.html',
  imports: [MatIconModule, MatButtonModule],
  standalone: true,
  styleUrls: ['./carousel.widget.css']
})
export class CarouselWidget{
  photos: any = ["imgs/after3.jpg", "imgs/after1.jpg", "imgs/gallery1.png", "imgs/gallery2.png", "imgs/gallery3.png", "imgs/gallery4.png"]
  index: number = 0;
  intervalid: any;
  autoRunning: boolean = false; // Flag to track if auto is running

  // To disable the button
  
  // To enable the button

  decreaseind(){
    console.log("decreasing index")

        this.index -= 1 

    
}

    increaseind(){

            this.index += 1 
        console.log("increasing index")
    }

    runauto(){
        setInterval(() => {
            if(this.index < 4){
                this.index += 1 
            }else{
                this.index = 0
            }
        }, 3000);
    }


}

