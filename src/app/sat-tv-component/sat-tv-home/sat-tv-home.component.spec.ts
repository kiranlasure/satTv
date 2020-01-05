import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatTvHomeComponent } from './sat-tv-home.component';

describe('SatTvHomeComponent', () => {
  let component: SatTvHomeComponent;
  let fixture: ComponentFixture<SatTvHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatTvHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatTvHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
