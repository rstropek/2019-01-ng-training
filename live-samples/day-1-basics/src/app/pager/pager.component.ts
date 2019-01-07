import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
  public currentPage = 0;
  @Input() public numberOfPages: number;
  @Output() public previous: EventEmitter<void> = new EventEmitter();
  @Output() public next: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public gotoPrevious() {
    this.previous.emit(null);
    this.currentPage--;
  }

  public gotoNext() {
    this.next.emit(null);
    this.currentPage++;
  }
}
