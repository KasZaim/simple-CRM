import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';

describe('UserDetailComponent', () => {
  const firestoreMock = {
    collection: jasmine.createSpy('collection').and.returnValue({
      doc: jasmine.createSpy('doc').and.returnValue({
        valueChanges: jasmine.createSpy('valueChanges').and.returnValue(of({/* Mock-Daten hier */}))
        // Setzen Sie weitere Mock-Methoden fort, die benötigt werden
      })
    })
  };
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailComponent,RouterModule.forRoot([])],
      providers: [ 
        { provide: Firestore, useValue: firestoreMock } // Den Firestore Mock hier bereitstellen
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
