import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FilterPipeModule} from 'ngx-filter-pipe';
import {HttpClientModule} from '@angular/common/http';
import {ConfirmationDialogService} from './confirmation-dialog/confirmation-dialog.service';

import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {AppComponent} from './app.component';
import {EditModalComponent} from './edit-modal/edit-modal.component';
import {DeleteModalComponent} from './delete-modal/delete-modal.component';
import {AuthorComponent} from './author/author.component';
import {AuthorListComponent} from './author-list/author-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EditModalComponent,
    DeleteModalComponent,
    ConfirmationDialogComponent,
    AuthorComponent,
    AuthorListComponent,
    AuthorListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    AngularFontAwesomeModule,
    FilterPipeModule,
    HttpClientModule,
  ],
  providers: [ConfirmationDialogService],
  entryComponents: [ConfirmationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
