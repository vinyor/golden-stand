import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationChromeService } from '../../core/navigation/navigation-chrome.service';

@Component({
  selector: 'app-rankings',
  imports: [],
  templateUrl: './rankings.html',
  styleUrl: './rankings.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Rankings {
  protected readonly chrome = inject(NavigationChromeService);
}
