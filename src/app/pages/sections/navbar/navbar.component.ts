import { AfterViewInit, Component, Inject, PLATFORM_ID, signal } from "@angular/core";

import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Router, RouterLink, RouterModule } from "@angular/router";

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, RouterModule, CommonModule],
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavBarComponent{

    constructor(private router: Router) {}
    
    isNothome(): boolean {
        return this.router.url !== '/';
    }

    navHome(): void {
        this.router.navigate(['/']);
    }
}