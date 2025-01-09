import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoModularComponent } from './botao-modular.component';

describe('BotaoModularComponent', () => {
  let component: BotaoModularComponent;
  let fixture: ComponentFixture<BotaoModularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoModularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoModularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
