import { computed, inject, Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { extractGroupCodeFromSnapshot } from './navigation-route-utils';

/**
 * Shared navigation chrome state derived from the current URL (group context).
 */
@Injectable({ providedIn: 'root' })
export class NavigationChromeService {
  private readonly router = inject(Router);
  private readonly groupCodeInternal = signal<string | null>(null);

  /** Current `groupCode` route param when the user is under `/grupos/:groupCode/...`. */
  readonly groupCode = this.groupCodeInternal.asReadonly();

  /** Mobile bottom tabs are shown only inside a group. */
  readonly showBottomTabs = computed(() => this.groupCodeInternal() !== null);

  constructor() {
    this.syncFromRouter();
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.syncFromRouter());
  }

  private syncFromRouter(): void {
    this.groupCodeInternal.set(extractGroupCodeFromSnapshot(this.router.routerState.snapshot.root));
  }
}
