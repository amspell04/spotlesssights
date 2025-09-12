import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-card',
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    
})
export class CardComponent {
    @Input() title!: string;
    @Input() body!: string;
    @Input() showIcons!: boolean;
  
 
}
