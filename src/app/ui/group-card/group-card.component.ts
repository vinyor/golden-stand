import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-group-card',
  imports: [DecimalPipe],
  templateUrl: './group-card.component.html',
  styleUrl: './group-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupCardComponent {
  /** Fired when the card is activated (tap / click / keyboard). */
  readonly cardClick = output<void>();
  /** PrimeIcons classes, e.g. `pi pi-trophy`. */
  iconClass = input.required<string>();

  /** CSS color value for the icon (uses theme variables). */
  iconColor = input.required<string>();

  groupName = input.required<string>();
  points = input.required<number>();
  participantCount = input.required<number>();

  protected iconClasses(): string {
    return `${this.iconClass()} group-card__icon`;
  }

  protected onActivate(): void {
    this.cardClick.emit();
  }
}
