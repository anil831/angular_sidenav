import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicForm1Component } from './dynamic-form1.component';

describe('DynamicForm1Component', () => {
  let component: DynamicForm1Component;
  let fixture: ComponentFixture<DynamicForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicForm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
