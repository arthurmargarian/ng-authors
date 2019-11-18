import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ConfirmationDialogService} from '../confirmation-dialog/confirmation-dialog.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {
  @Input() IAuthor;
  @Output() OAuthorID = new EventEmitter();

  constructor(private CDS: ConfirmationDialogService, private toastr: ToastrService) {
  }

  openConfirmationDialog() {
    this.CDS.confirm(`${this.IAuthor.name}`,
      `Do you really want to delete information about this author?`,
      'YES',
      'Cancel',
      'lg'
    ).then((confirmed) => {
      if (confirmed) {
        this.OAuthorID.emit(this.IAuthor.id);
        this.toastr.info(`Info about ${this.IAuthor.name} was deleted.`);
      } else {
        this.toastr.warning('You canceled confirmation.');
      }
    })
      .catch(() => this.toastr.warning('You canceled confirmation.'));
  }
}
