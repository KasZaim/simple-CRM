import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { User } from '../models/user.class';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
  MatButtonModule,
  CommonModule,
  FormsModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  user = new User();
  birthDate = new Date();

  saveUser(){
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user)
  }
  closeDialog() {
    // this.dialog.close();
  }
}
