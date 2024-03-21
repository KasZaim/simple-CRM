import { Component , Injectable, inject} from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { elementAt } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  firestore: Firestore = inject(Firestore);
  constructor(){
  }
  async addUser(user: any): Promise<void> {
    const usersCollection = collection(this.firestore, 'users');
    await addDoc(usersCollection, user);
  }
}
