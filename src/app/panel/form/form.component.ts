import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  public instruction = 'Translate de sentence bellow:';
  public label = 'Enter your answer here:';
  @Input() sentence: string;

  constructor() {}

  ngOnInit() {}
}
