import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GroupCreatedModalComponent } from './modals/group-created-modal/group-created-modal.component';

@Component({
  selector: 'app-create-group',
  imports: [ReactiveFormsModule, GroupCreatedModalComponent],
  templateUrl: './create-group.html',
  styleUrl: './create-group.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateGroup {
  private static readonly inviteCharset = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

  private readonly fb = inject(FormBuilder);

  protected readonly groupCreatedModalOpen = signal(false);
  protected readonly createdGroupDisplayName = signal('');
  protected readonly createdInviteCode = signal('');

  protected readonly form = this.fb.nonNullable.group({
    groupName: ['', [Validators.required, Validators.maxLength(120)]],
    scoring: this.fb.nonNullable.group({
      correctWinner: [3, [Validators.required, Validators.min(0), Validators.max(999)]],
      exactScore: [7, [Validators.required, Validators.min(0), Validators.max(999)]],
      classification: [5, [Validators.required, Validators.min(0), Validators.max(999)]],
    }),
    extraPoints: this.fb.nonNullable.group({
      goldenBoot: [15, [Validators.required, Validators.min(0), Validators.max(999)]],
      mvpTournament: [20, [Validators.required, Validators.min(0), Validators.max(999)]],
      mvpYoung: [10, [Validators.required, Validators.min(0), Validators.max(999)]],
    }),
  });

  protected onGroupCreatedDismiss(): void {
    this.groupCreatedModalOpen.set(false);
  }

  protected onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    const name = this.form.controls.groupName.value.trim();
    const code = this.generateInviteToken();
    this.createdGroupDisplayName.set(name.length > 0 ? name : 'Grupo');
    this.createdInviteCode.set(code);
    this.groupCreatedModalOpen.set(true);
    // TODO: persist group configuration via API
  }

  private randomInviteSegment(length: number): string {
    return Array.from({ length }, () => {
      const i = Math.floor(Math.random() * CreateGroup.inviteCharset.length);
      return CreateGroup.inviteCharset[i] ?? 'X';
    }).join('');
  }

  private generateInviteToken(): string {
    return `${this.randomInviteSegment(4)}-${this.randomInviteSegment(4)}-${this.randomInviteSegment(3)}`;
  }
}
