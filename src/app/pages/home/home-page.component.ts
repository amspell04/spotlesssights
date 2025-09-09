import { Component } from "@angular/core";
import { HeaderNavComponent } from "../../components/header-nav/header-nav.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
    selector: 'app-home-page',
    imports: [HeaderNavComponent, CardComponent],
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
})
export class HomePageComponent {

    
}
