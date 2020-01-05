import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSubComponent } from './current-sub.component';

describe('CurrentSubComponent', () => {
  let component: CurrentSubComponent;
  let fixture: ComponentFixture<CurrentSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
