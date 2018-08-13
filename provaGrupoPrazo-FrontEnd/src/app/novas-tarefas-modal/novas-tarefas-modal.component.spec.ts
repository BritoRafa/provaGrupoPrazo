import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovasTarefasModalComponent } from './novas-tarefas-modal.component';

describe('NovasTarefasModalComponent', () => {
  let component: NovasTarefasModalComponent;
  let fixture: ComponentFixture<NovasTarefasModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovasTarefasModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovasTarefasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
