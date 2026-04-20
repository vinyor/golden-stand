import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-group-card',
  imports: [DecimalPipe],
  templateUrl: './group-card.component.html',
  styleUrl: './group-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupCardComponent {
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
}
