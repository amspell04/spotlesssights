import { Component, Inject, PLATFORM_ID, signal } from "@angular/core";

import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-about',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
})
export class AboutComponent{

}
