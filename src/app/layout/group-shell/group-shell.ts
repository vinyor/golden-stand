import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-group-shell',
  imports: [RouterOutlet],
  templateUrl: './group-shell.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupShell {}
