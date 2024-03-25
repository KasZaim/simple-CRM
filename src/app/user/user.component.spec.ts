import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { of } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';

describe('UserComponent', () => {
  const firestoreMock = {
    collection: jasmine.createSpy('collection').and.returnValue({
      doc: jasmine.createSpy('doc').and.returnValue({
        valueChanges: jasmine.createSpy('valueChanges').and.returnValue(of({/* Mock-Daten hier */}))
        // Setzen Sie weitere Mock-Methoden fort, die benötigt werden
      })
    })
  };
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent],
      providers: [ 
        { provide: Firestore, useValue: firestoreMock } // Den Firestore Mock hier bereitstellen
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
