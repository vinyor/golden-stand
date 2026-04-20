import { inject, Injectable } from '@angular/core';
import { MessageService as PrimeNgMessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  private primeNgMessageService = inject(PrimeNgMessageService)
  private readonly MESSAGE_DURATION = 3000

  success(title: string, message: string) {
    this.primeNgMessageService.add({ severity: 'success', summary: title, detail: message, life: this.MESSAGE_DURATION, icon: 'pi-check-circle' });
  }

  error(title: string, message: string) {
    this.primeNgMessageService.add({ severity: 'error', summary: title, detail: message, life: this.MESSAGE_DURATION });
  }
}
