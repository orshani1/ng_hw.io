import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatgerComponent } from './fatger.component';

describe('FatgerComponent', () => {
  let component: FatgerComponent;
  let fixture: ComponentFixture<FatgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
