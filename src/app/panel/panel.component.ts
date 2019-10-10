import { Component, OnInit } from '@angular/core';
import { Phrase } from '../shared/phrase';
import { PHRASES } from './phrases-mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html'
})
export class PanelComponent implements OnInit {
  public phrase: Phrase[] = PHRASES;

  constructor() {}

  ngOnInit() {}
}
