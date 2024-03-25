import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogEditUserComponent } from './dialog-edit-user.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

describe('DialogEditUserComponent', () => {
  const firestoreMock = {
    collection: jasmine.createSpy('collection').and.returnValue({
      doc: jasmine.createSpy('doc').and.returnValue({
        valueChanges: jasmine.createSpy('valueChanges').and.returnValue(of({/* Mock-Daten hier */}))
        // Setzen Sie weitere Mock-Methoden fort, die benötigt werden
      })
    })
  };
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DialogEditUserComponent, // Importieren als Standalone-Komponente
        MatDialogModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: Firestore, useValue: firestoreMock }
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
