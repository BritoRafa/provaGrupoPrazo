import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  public onClose: Subject<boolean>;
  constructor(public modalRef: BsModalRef) { }

  ngOnInit() {
    this.onClose = new Subject();
  }
  public onConfirm(): void {
    this.onClose.next(true);
    this.modalRef.hide();
}

public onCancel(): void {

    this.onClose.next(false);
    this.modalRef.hide();
}

}
