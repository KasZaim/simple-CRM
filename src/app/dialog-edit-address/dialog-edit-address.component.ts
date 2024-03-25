import { Component, inject } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.class';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatProgressBarModule,CommonModule,MatButtonModule,MatInputModule,MatDialogActions,
    MatDialogClose,
    MatDialogContent,
  FormsModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})


export class DialogEditAddressComponent {
  	user: User = new User(); // '!'Dies teilt TypeScript mit, dass die user-Eigenschaft definitiv zugewiesen wird, bevor sie tatsächlich verwendet wird. Dies ist nützlich in Fällen wie Ihrem, wo die Eigenschaft nach der Erstellung der Komponenteninstanz, aber vor ihrer Verwendung, gesetzt wird.
    loading = false;
    userID?: string | null;
    firestore: Firestore = inject(Firestore);
    
  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>){

  }

  async saveUser() {
    this.loading = true;
    const userDocRef = doc(this.firestore, `users/` + this.userID);
    await updateDoc(userDocRef, this.user.toJSON()).then(() => {
      this.dialogRef.close();
      this.loading = false;
    });
  }
}
