import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationChromeService } from '../../core/navigation/navigation-chrome.service';

export interface AppNavItem {
  readonly path: readonly string[];
  readonly label: string;
  readonly mobileLabel: string;
  readonly iconClass: string;
  readonly linkActiveExact: boolean;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeader {
  protected readonly profileLinkActiveOptions: { exact: boolean } = { exact: true };

  /** Global home route; logo always points here. */
  protected readonly homeLink = ['/'] as const;

  protected readonly chrome = inject(NavigationChromeService);

  protected readonly navItems = computed((): readonly AppNavItem[] => {
    const code = this.chrome.groupCode();
    if (!code) {
      return [];
    }
    const base = ['/grupos', code] as const;
    return [
      {
        path: ['/'],
        label: 'Inicio',
        mobileLabel: 'INICIO',
        iconClass: 'pi pi-home',
        linkActiveExact: true,
      },
      {
        path: [...base, 'ranking'],
        label: 'Ranking',
        mobileLabel: 'RANKING',
        iconClass: 'pi pi-chart-bar',
        linkActiveExact: false,
      },
      {
        path: [...base, 'prediccion'],
        label: 'Predicción',
        mobileLabel: 'PREDICCIÓN',
        iconClass: 'pi pi-pen-to-square',
        linkActiveExact: false,
      },
      {
        path: [...base, 'ajustes'],
        label: 'Ajustes',
        mobileLabel: 'AJUSTES',
        iconClass: 'pi pi-cog',
        linkActiveExact: false,
      },
    ];
  });

  protected linkActiveOptions(item: AppNavItem): { exact: boolean } {
    return { exact: item.linkActiveExact };
  }

  protected trackNavPath(_index: number, item: AppNavItem): string {
    return item.path.join('/') || 'home';
  }
}
