import { Component, inject,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderSidenavComponent } from './shared/header-sidenav/header-sidenav.component';
import { Firestore } from '@angular/fire/firestore';
import { LandingPageComponent } from './landing-page/landing-page.component';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderSidenavComponent,LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(){
    
  }

  ngOnInit(): void {
    AOS.init();
    
  }
  
}
