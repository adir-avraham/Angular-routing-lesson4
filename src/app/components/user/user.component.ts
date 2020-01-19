import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() userObj: any
  @Output() delEvent = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }

}
