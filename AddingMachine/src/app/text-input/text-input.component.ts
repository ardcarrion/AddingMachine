import { Component, OnInit } from '@angular/core';
import Evaluator from '../../../evaluator';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  output: String = "";
  eval: Evaluator = new Evaluator;

  calculate(input: string) {
    let out = this.eval.run(input);
    if (input.charAt(0) == '>') input = input.substr(1);
    this.output += "> "+input+"\n";
    this.output += ">> "+out+"\n";
  }

}
