import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectValueInputComponent } from './select-value-input.component';

describe('SelectValueInputComponent', () => {
  let component: SelectValueInputComponent;
  let fixture: ComponentFixture<SelectValueInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectValueInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectValueInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
