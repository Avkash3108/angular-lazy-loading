import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentHeaderComponent } from './admin-content-header.component';

describe('AdminContentHeaderComponent', () => {
  let component: AdminContentHeaderComponent;
  let fixture: ComponentFixture<AdminContentHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContentHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
