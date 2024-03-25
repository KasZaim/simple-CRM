import { Component, inject } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../models/user.class';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    MatProgressBarModule
    
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  firestore: Firestore = inject(Firestore);
  dialog: any;
  constructor( public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  user = new User();
  birthDate = new Date();
  loading = false;

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;
      this.addUser(this.user.toJSON())
      .then((result: any) => {
        console.log('User added successfully', result);
        this.loading = false;
      })
      this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
  async addUser(user: any): Promise<void> {
    const usersCollection = collection(this.firestore, 'users');
    await addDoc(usersCollection, user);
  }
}
