import { Component } from "@angular/core";
import { RouterLink, RouterModule, Router } from "@angular/router";
import { MatToolbar } from "@angular/material/toolbar";
import { MatIconButton } from "@angular/material/button";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, RouterModule, MatToolbar, MatIconButton, MatMenu, MatMenuItem, MatMenuTrigger],
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
