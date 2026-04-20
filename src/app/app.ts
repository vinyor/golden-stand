import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { TRANSLATION_CONFIG } from './core/primeng/translation-es.config';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastModule, ConfirmDialogModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private primeNg = inject(PrimeNG)
  protected readonly title = signal('golden_stand');
  
  constructor() {
    this.primeNg.translation = TRANSLATION_CONFIG;
  }
}
