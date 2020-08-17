import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatteralComponent } from './latteral.component';

describe('LatteralComponent', () => {
  let component: LatteralComponent;
  let fixture: ComponentFixture<LatteralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatteralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatteralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
