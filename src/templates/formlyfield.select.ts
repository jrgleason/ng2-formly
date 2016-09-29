import {Component} from "@angular/core";
import {Field} from "./field";

@Component({
  selector: "formly-field-select",
  template: `
        <div class="select form-group" [formGroup]="form">
          <label for="" class="form-control-label">{{templateOptions.label}}</label>
          <select [id]="key" [formControlName]="key" class="form-control" [formlyNgFocus]="focus" (focus)="focus = true">
            <option value="" *ngIf="templateOptions.placeholder">{{templateOptions.placeholder}}</option>
            <option *ngFor="let opt of templateOptions.options" [value]="opt.value">{{opt.label}}</option>
          </select>
          <small class="text-muted">{{templateOptions.description}}</small>
        </div>
    `,
})
export class FormlyFieldSelect extends Field {
}