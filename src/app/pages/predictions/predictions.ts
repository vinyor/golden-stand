import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationChromeService } from '../../core/navigation/navigation-chrome.service';

@Component({
  selector: 'app-predictions',
  imports: [],
  templateUrl: './predictions.html',
  styleUrl: './predictions.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Predictions {
  protected readonly chrome = inject(NavigationChromeService);
}
