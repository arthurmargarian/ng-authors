import {Component, EventEmitter, Input, Output} from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
})
export class EditModalComponent {
  authorNewInfo: object;
  @Input() IAuthorOldInfo;
  @Output() OSentAuthorNewInfoStep1 = new EventEmitter();

  constructor(private modalService: NgbModal) {
  }

  open(content) {
    this.authorNewInfo = Object.create(this.IAuthorOldInfo, {
      id: {value: this.IAuthorOldInfo.id},
    });
    this.modalService.open(content);
  }

  sentAuthorNewInfoStep1() {
    this.OSentAuthorNewInfoStep1.emit(this.authorNewInfo);
  }
}
