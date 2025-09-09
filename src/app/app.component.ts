import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{

  title = 'spotless';
  currimage: string = "";
  photos = ["imgs/after1.jpg", "imgs/after2.jpg", "imgs/after3.jpg"]
  index = 0;

  
}

