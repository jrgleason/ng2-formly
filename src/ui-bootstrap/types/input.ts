import { Component } from '@angular/core';
import { FieldType } from '../../core/core';

@Component({
  selector: 'formly-field-input',
  template: `
    <input [type]="type" [formControl]="formControl" class="form-control" [id]="id"
      [formlyAttributes]="field" [ngClass]="{'form-control-danger': valid}">
    `,
})
export class FormlyFieldInput extends FieldType {
  get type() {
    return this.to.type || 'text';
  }
}
