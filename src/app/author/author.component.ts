import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  @Input() IAuthor;
  @Output() ODeleteAuthor = new EventEmitter();
  @Output() OSentAuthorNewInfoStep2 = new EventEmitter();


  sentAuthorNewInfoStep2(newInfo) {
    this.OSentAuthorNewInfoStep2.emit(newInfo);
  }

  removeAuthor(authorID) {
    this.ODeleteAuthor.emit(authorID);
  }
}
