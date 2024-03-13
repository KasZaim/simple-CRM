import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-header-sidenav',
  standalone: true,
  imports: [MatToolbarModule,MatSidenavModule,MatIconModule,RouterOutlet,RouterLink],
  templateUrl: './header-sidenav.component.html',
  styleUrl: './header-sidenav.component.scss'
})
export class HeaderSidenavComponent {

}
