import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  @Input() childSelectedPost: Post;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
  
  constructor() { }

  ngOnInit() {
  }

}
