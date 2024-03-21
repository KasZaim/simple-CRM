import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../models/user.class';
import {MatCardModule} from '@angular/material/card';
import { Firestore, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule,MatIcon,MatTooltipModule,MatDialogModule,MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  user:User = new User();
  constructor(public dialog: MatDialog, private firestore : Firestore){
    
  }
  ngOnInit(): void {
    
  }

  openDialog(){
    this.dialog.open(DialogAddUserComponent);
  }
}
