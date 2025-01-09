import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraRecursoComponent } from './barra-recurso.component';

describe('BarraRecursoComponent', () => {
  let component: BarraRecursoComponent;
  let fixture: ComponentFixture<BarraRecursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraRecursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
