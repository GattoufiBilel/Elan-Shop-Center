import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsListComponent } from './arts-list.component';

describe('ArtsListComponent', () => {
  let component: ArtsListComponent;
  let fixture: ComponentFixture<ArtsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
