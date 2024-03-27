import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { AboutTheAppComponent } from '../about-the-app/about-the-app.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterModule,AboutTheAppComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(private router : Router){
    

  }
  ngOnInit(): void{
  }
  redirect(){
    this.router.navigateByUrl('dashboard');
  }
}
