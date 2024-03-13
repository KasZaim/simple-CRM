import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSidenavComponent } from './header-sidenav.component';

describe('HeaderSidenavComponent', () => {
  let component: HeaderSidenavComponent;
  let fixture: ComponentFixture<HeaderSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
