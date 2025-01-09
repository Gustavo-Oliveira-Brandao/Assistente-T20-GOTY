import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PericiaComponent } from './pericia.component';

describe('PericiaComponent', () => {
  let component: PericiaComponent;
  let fixture: ComponentFixture<PericiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PericiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PericiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
