import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Dialog } from 'primeng/dialog';

export interface JoinGroupPayload {
  displayName: string;
  groupCode: string;
}

@Component({
  selector: 'app-join-group-dialog',
  imports: [Dialog, ReactiveFormsModule],
  templateUrl: './join-group-dialog.html',
  styleUrl: './join-group-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinGroupDialog {
  private readonly fb = inject(FormBuilder);

  /** When true, the dialog is shown. */
  readonly open = input(false);

  /** Emitted when the dialog should close (overlay, escape, or cancel). */
  readonly dismiss = output<void>();

  /** Emitted when the user submits a valid form. */
  readonly joinRequest = output<JoinGroupPayload>();

  /**
   * Inline surface styles so the panel stays dark when the dialog is portaled to
   * `document.body` (component SCSS with :host would not apply there).
   */
  protected readonly dialogRootStyle = {
    width: 'min(92vw, 26rem)',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    border: '1px solid rgba(128, 128, 128, 0.35)',
    borderRadius: '1.25rem',
    boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.65)',
    overflow: 'hidden',
  } as const;

  protected readonly dialogContentStyle = {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: 0,
  } as const;

  protected readonly form = this.fb.nonNullable.group({
    displayName: ['', [Validators.required, Validators.maxLength(120)]],
    groupCode: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
  });

  protected onDialogVisibleChange(next: boolean): void {
    if (!next) {
      this.dismiss.emit();
    }
  }

  protected onDialogShow(): void {
    this.form.reset({ displayName: '', groupCode: '' }, { emitEvent: false });
  }

  protected onCancel(): void {
    this.dismiss.emit();
  }

  protected onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    const { displayName, groupCode } = this.form.getRawValue();
    this.joinRequest.emit({
      displayName: displayName.trim(),
      groupCode: groupCode.trim(),
    });
  }
}
