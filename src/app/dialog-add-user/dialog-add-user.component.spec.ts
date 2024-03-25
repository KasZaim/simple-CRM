import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { DialogAddUserComponent } from './dialog-add-user.component';

describe('DialogEditAddressComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

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
        DialogAddUserComponent, // Importieren als Standalone-Komponente
        MatDialogModule,
         
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} }, // Einen leeren Mock für MatDialogRef bereitstellen
        { provide: Firestore, useValue: firestoreMock } // Den Firestore Mock hier bereitstellen
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Fügen Sie hier weitere Tests hinzu
});
