import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, merge, of } from 'rxjs';
import { AppHeader } from '../app-header/app-header';

@Component({
  selector: 'app-page-shell',
  imports: [RouterOutlet, AppHeader],
  templateUrl: './page-shell.html',
  styleUrl: './page-shell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageShell {
  private router = inject(Router);
}
