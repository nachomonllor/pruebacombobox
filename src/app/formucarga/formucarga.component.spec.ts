import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormucargaComponent } from './formucarga.component';

describe('FormucargaComponent', () => {
  let component: FormucargaComponent;
  let fixture: ComponentFixture<FormucargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormucargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormucargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
