import { Component, OnInit, inject, OnDestroy} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { DocumentData, Firestore, collection, onSnapshot } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIcon,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit{
  firestore: Firestore = inject(Firestore);
  user: User = new User();
  usersCollectionRef = collection(this.firestore, 'users');
  allUsers: DocumentData[]  = [];

  constructor(public dialog: MatDialog,private router: Router,) {
    console.log(this.allUsers)
    this.subscribeToUsers();
  }

  ngOnInit(): void {
    
  }
  navigateToUser(userId: string): void {
    this.router.navigate(['/user/', userId]);
  }
  subscribeToUsers(): void {
    onSnapshot(this.usersCollectionRef, (list) => {
      this.allUsers = [];
      list.forEach((element) => {
        const userData = {
          data: element.data(),
          id: element.id
        }

        this.allUsers.push(userData) 
        console.log(this.allUsers);
      });
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
  
}
