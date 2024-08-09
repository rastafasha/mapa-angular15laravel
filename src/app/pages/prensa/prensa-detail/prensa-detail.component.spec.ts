import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrensaDetailComponent } from './prensa-detail.component';

describe('PrensaDetailComponent', () => {
  let component: PrensaDetailComponent;
  let fixture: ComponentFixture<PrensaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrensaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrensaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
