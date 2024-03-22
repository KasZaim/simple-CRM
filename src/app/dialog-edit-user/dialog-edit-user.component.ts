import { Component, inject } from '@angular/core';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { User } from '../models/user.class';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatProgressBarModule,
    CommonModule,
    FormsModule,
    MatDialogActions,
    MatButtonModule,
    MatInputModule,
    MatDialogContent,
    MatDatepickerModule,
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss',
})
export class DialogEditUserComponent {
  user!: User;
  userID?: string | null;
  loading = false;
  birthDate = new Date();
  firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) {}
  async saveUser() {
    this.loading = true;
    const userDocRef = doc(this.firestore, `users/` + this.userID);
    await updateDoc(userDocRef, this.user.toJSON()).then(() => {
      this.dialogRef.close();
      this.loading = false;
    });
  }
}
