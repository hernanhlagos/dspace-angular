import {
  Component,
  Input,
  OnInit,
  Optional,
} from '@angular/core';
import {
  ControlContainer,
  FormsModule,
  NgForm,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { controlContainerFactory } from '../../../process-form-factory';
import { ValueInputComponent } from '../value-input.component';

/**
 * Represents the user selected value of a parameter with allowed values
 */
@Component({
  selector: 'ds-select-value-input',
  templateUrl: './select-value-input.component.html',
  styleUrls: ['./select-value-input.component.scss'],
  viewProviders: [{ provide: ControlContainer,
    useFactory: controlContainerFactory,
    deps: [[new Optional(), NgForm]] }],
  imports: [
    FormsModule,
    TranslateModule,
  ],
})
export class SelectValueInputComponent extends ValueInputComponent<string> implements OnInit {
  /**
   * The current selected value
   */
  value: string;

  /**
   * Initial value of the field
   */
  @Input() initialValue;

  /**
   * Allowed values for this parameter
   */
  @Input() allowedValues: string[] = [];

  ngOnInit(): void {
    this.value = this.initialValue;
  }

  setValue(value) {
    this.value = value;
    this.updateValue.emit(value);
  }
}