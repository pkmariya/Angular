import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public parentData; 
  @Output() public msgToParent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendMsg() {
    this.msgToParent.emit("This is an emitted msg from Child to Parent!");
  }

}
