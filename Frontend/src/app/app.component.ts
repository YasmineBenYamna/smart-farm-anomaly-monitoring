import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from "./shared/components/loader/loader.component";
import { TapToTopComponent } from "./shared/components/tap-to-top/tap-to-top.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, LoaderComponent, TapToTopComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
  
}
