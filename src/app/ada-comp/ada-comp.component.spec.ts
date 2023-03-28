import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaCompComponent } from './ada-comp.component';

describe('AdaCompComponent', () => {
  let component: AdaCompComponent;
  let fixture: ComponentFixture<AdaCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
