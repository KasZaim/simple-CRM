import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderSidenavComponent } from './shared/header-sidenav/header-sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderSidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-CRM';
}
