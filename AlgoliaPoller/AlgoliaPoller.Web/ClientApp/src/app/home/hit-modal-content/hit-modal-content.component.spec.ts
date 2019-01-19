import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitModalContentComponent } from './hit-modal-content.component';

describe('HitModalContentComponent', () => {
  let component: HitModalContentComponent;
  let fixture: ComponentFixture<HitModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
