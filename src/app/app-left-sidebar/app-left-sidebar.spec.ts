import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppLeftSidebar } from './app-left-sidebar';

describe('AppLeftSidebar', () => {
  let component: AppLeftSidebar;
  let fixture: ComponentFixture<AppLeftSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLeftSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(AppLeftSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
