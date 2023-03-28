import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToCsvComponent } from './convert-to-csv.component';

describe('ConvertToCsvComponent', () => {
  let component: ConvertToCsvComponent;
  let fixture: ComponentFixture<ConvertToCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToCsvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertToCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
