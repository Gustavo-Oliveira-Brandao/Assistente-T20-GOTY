import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoRolagemComponent } from './botao-rolagem.component';

describe('BotaoRolagemComponent', () => {
  let component: BotaoRolagemComponent;
  let fixture: ComponentFixture<BotaoRolagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoRolagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoRolagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
