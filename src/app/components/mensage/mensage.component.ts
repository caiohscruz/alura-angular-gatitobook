import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensage',
  templateUrl: './mensage.component.html',
  styleUrls: ['./mensage.component.css']
})
export class MensageComponent implements OnInit {

  @Input()
  mensage = ''

  constructor() { }

  ngOnInit(): void {
  }

}
