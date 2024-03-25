import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSidenavComponent } from './header-sidenav.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

describe('HeaderSidenavComponent', () => {
  let component: HeaderSidenavComponent;
  let fixture: ComponentFixture<HeaderSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSidenavComponent,BrowserAnimationsModule,NoopAnimationsModule,,RouterModule.forRoot([])]
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
