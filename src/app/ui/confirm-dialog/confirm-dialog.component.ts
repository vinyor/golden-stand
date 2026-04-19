import { Component, input, model, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-confirm-dialog',
  imports: [Dialog, ButtonModule, FormsModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
})
export class ConfirmDialogComponent {
  visible = model<boolean>(false);
  modal = input(true);
  message = input('');

  @Output() emitResult$ = new Subject<boolean>();

  updateVisibility(value: boolean) {
    this.visible.set(value);
  }

  accept(): void {
    this.updateVisibility(false);
    this.emitResult$.next(true);
  }

  cancel(): void {
    this.updateVisibility(false);
    this.emitResult$.next(false);
  }
}
