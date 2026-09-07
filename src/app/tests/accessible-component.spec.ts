import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessibleComponentComponent } from './accessible-component.component';

describe('AccessibleComponentComponent', () => {
  let component: AccessibleComponentComponent;
  let fixture: ComponentFixture<AccessibleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessibleComponentComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessibleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});