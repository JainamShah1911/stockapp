import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bands } from 'src/app/models/bands';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StationComponent implements OnInit {
  bandForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.bandForm = this.fb.group({
      buy: ['', Validators.required],
      sell: ['', [Validators.required]],
      sqOff: ['', [Validators.required]],
    });
  }

  bands: Bands[] = [
    {
      buy: 10,
      sell: 12,
      squareOff: 11,
    },
    {
      buy: 11,
      sell: 15,
      squareOff: 12,
    },
    {
      buy: 25,
      sell: 28,
      squareOff: 26,
    },
    {
      buy: 11,
      sell: 15,
      squareOff: 12,
    },
    {
      buy: 25,
      sell: 28,
      squareOff: 26,
    }
  ];

  public submitForm() {}
}
