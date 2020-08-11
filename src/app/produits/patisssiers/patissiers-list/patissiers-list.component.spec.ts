import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatissiersListComponent } from './patissiers-list.component';

describe('PatissiersListComponent', () => {
  let component: PatissiersListComponent;
  let fixture: ComponentFixture<PatissiersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatissiersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatissiersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
