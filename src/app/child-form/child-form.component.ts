import { Component, OnInit,forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR ,FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChildFormComponent),
      multi: true
    }
  ]
})
export class ChildFormComponent implements OnInit,  ControlValueAccessor {

  private disabled : boolean = false; 
  private form_ = new FormControl("my from");
  constructor() { }

  ngOnInit() {

   this.form_.valueChanges.subscribe(d => {
      this.onChange(d);
 });

  }

  onTouched = (_d: any) => {
  };

  writeValue(val: any): void {
    console.log(val);
    this.form_.setValue(val);

  }

  onChange = (_d: any) => {
  };

  registerOnChange(fn): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
    
  }

  setDisabledState(isDisabled: boolean): void {
 
    if(isDisabled)this.form_.disable();
    else this.form_.enable();
  }

}
