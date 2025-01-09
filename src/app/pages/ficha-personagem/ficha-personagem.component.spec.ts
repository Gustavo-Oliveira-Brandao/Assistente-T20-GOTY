import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaPersonagemComponent } from './ficha-personagem.component';

describe('FichaPersonagemComponent', () => {
  let component: FichaPersonagemComponent;
  let fixture: ComponentFixture<FichaPersonagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaPersonagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaPersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
