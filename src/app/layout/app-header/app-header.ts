import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface AppNavItem {
  path: string;
  label: string;
  mobileLabel: string;
  iconClass: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeader {
  protected readonly navItems: AppNavItem[] = [
    { path: '/', label: 'Home', mobileLabel: 'HOME', iconClass: 'pi pi-home' },
    { path: '/rankings', label: 'Rankings', mobileLabel: 'RANKINGS', iconClass: 'pi pi-chart-bar' },
    {
      path: '/predictions',
      label: 'Predictions',
      mobileLabel: 'PREDICTIONS',
      iconClass: 'pi pi-pen-to-square',
    },
    { path: '/profile', label: 'Profile', mobileLabel: 'PROFILE', iconClass: 'pi pi-user' },
  ];

  protected linkActiveOptions(path: string): { exact: boolean } {
    return path === '/' ? { exact: true } : { exact: false };
  }
}
