import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovosUsuariosModalComponent } from './novos-usuarios-modal.component';

describe('NovosUsuariosModalComponent', () => {
  let component: NovosUsuariosModalComponent;
  let fixture: ComponentFixture<NovosUsuariosModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovosUsuariosModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovosUsuariosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
