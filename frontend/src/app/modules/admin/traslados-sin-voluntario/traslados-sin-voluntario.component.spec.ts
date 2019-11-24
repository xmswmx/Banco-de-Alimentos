import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasladosSinVoluntarioComponent } from './traslados-sin-voluntario.component';

describe('TrasladosSinVoluntarioComponent', () => {
  let component: TrasladosSinVoluntarioComponent;
  let fixture: ComponentFixture<TrasladosSinVoluntarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasladosSinVoluntarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasladosSinVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
