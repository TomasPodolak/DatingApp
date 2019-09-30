import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-mebmer-card',
  templateUrl: './mebmer-card.component.html',
  styleUrls: ['./mebmer-card.component.css']
})
export class MebmerCardComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
