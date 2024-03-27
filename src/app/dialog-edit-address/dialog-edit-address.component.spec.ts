import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogEditAddressComponent } from './dialog-edit-address.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { provideAnimations } from '@angular/platform-browser/animations'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


describe('DialogEditAddressComponent', () => {
  let component: DialogEditAddressComponent;
  let fixture: ComponentFixture<DialogEditAddressComponent>;

  // Ein einfacher Mock für Firestore
  const firestoreMock = {
    collection: jasmine.createSpy('collection').and.returnValue({
      doc: jasmine.createSpy('doc').and.returnValue({
        valueChanges: jasmine.createSpy('valueChanges').and.returnValue(of({/* Mock-Daten hier */}))
        // Setzen Sie weitere Mock-Methoden fort, die benötigt werden
      })
    })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DialogEditAddressComponent, 
        MatDialogModule,
        MatProgressBarModule,
        MatIconModule,
        MatButtonModule,MatMenuModule,MatProgressBarModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} }, // Einen leeren Mock für MatDialogRef bereitstellen
         provideAnimations(), // Einen leeren Mock für MatDialogRef bereitstellen
        { provide: Firestore, useValue: firestoreMock } // Den Firestore Mock hier bereitstellen
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Fügen Sie hier weitere Tests hinzu
});
