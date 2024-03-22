import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { User } from '../models/user.class';
import { UserComponent } from '../user/user.component';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection,doc,onSnapshot } from '@angular/fire/firestore';
import { MatIcon } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, UserComponent,MatIcon,MatButtonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnInit {
  userId: string| null = null;
  firestore: Firestore = inject(Firestore);
  user: User = new User();
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id')
      if (this.userId) {
        this.subscribeToUser(this.userId);
      }
      
    });
  }

  subscribeToUser(userId:string){
    const docRef = doc(this.firestore, `users/${userId}`);
    onSnapshot(docRef, (doc) =>{
      if (doc.exists()) {
        this.user = new User(doc.data());
        console.log(this.user)
      }
    })
  }

  openAdressDialog(){
    
  }
}
