import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnDestroy,
  output,
  signal,
} from '@angular/core';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-group-created-modal',
  imports: [Dialog, NgOptimizedImage],
  templateUrl: './group-created-modal.component.html',
  styleUrl: './group-created-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupCreatedModalComponent implements OnDestroy {
  private copyResetTimer: ReturnType<typeof setTimeout> | null = null;

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

  /** When true, the dialog is shown. */
  readonly open = input(false);

  /** Display name of the group (e.g. from the form). */
  readonly groupName = input('');

  /** Invitation code shown and copied to the clipboard. */
  readonly inviteCode = input('');

  /** Emitted when the dialog should close (overlay, escape, or primary actions). */
  readonly dismiss = output<void>();

  protected readonly copyFeedback = signal<'idle' | 'copied' | 'error'>('idle');

  ngOnDestroy(): void {
    if (this.copyResetTimer !== null) {
      clearTimeout(this.copyResetTimer);
      this.copyResetTimer = null;
    }
  }

  protected onDialogVisibleChange(next: boolean): void {
    if (!next) {
      this.dismiss.emit();
    }
  }

  protected onDialogShow(): void {
    this.copyFeedback.set('idle');
  }

  protected onAccessGroup(): void {
    this.dismiss.emit();
  }

  protected async onCopyCode(): Promise<void> {
    const code = this.inviteCode().trim();
    if (!code) {
      this.copyFeedback.set('error');
      return;
    }

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
        this.copyFeedback.set('copied');
        this.scheduleCopyFeedbackReset();
        return;
      }
    } catch {
      // Fall through to legacy copy.
    }

    if (this.fallbackCopyToClipboard(code)) {
      this.copyFeedback.set('copied');
      this.scheduleCopyFeedbackReset();
    } else {
      this.copyFeedback.set('error');
    }
  }

  private fallbackCopyToClipboard(text: string): boolean {
    if (typeof document === 'undefined') {
      return false;
    }
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    document.body.removeChild(textarea);
    return ok;
  }

  private scheduleCopyFeedbackReset(): void {
    if (this.copyResetTimer !== null) {
      clearTimeout(this.copyResetTimer);
    }
    this.copyResetTimer = setTimeout(() => {
      this.copyFeedback.set('idle');
      this.copyResetTimer = null;
    }, 2500);
  }
}
