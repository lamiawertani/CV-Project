import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamiaComponent } from './lamia.component';

describe('LamiaComponent', () => {
  let component: LamiaComponent;
  let fixture: ComponentFixture<LamiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LamiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
