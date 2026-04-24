import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationChromeService } from '../../core/navigation/navigation-chrome.service';

@Component({
  selector: 'app-group-settings',
  imports: [],
  templateUrl: './group-settings.html',
  styleUrl: './group-settings.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupSettings {
  protected readonly chrome = inject(NavigationChromeService);
}
