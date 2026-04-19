import { inject, Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogOptions } from './models/confirm-dialog-options';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  private primeNgConfirmationService = inject(ConfirmationService);

  confirm(config: ConfirmDialogOptions) {
    this.primeNgConfirmationService.confirm({
      message: config.message,
      header: config.header || 'Confirmación',
      icon: config.icon || '',
      acceptLabel: config.acceptLabel || 'Aceptar',
      rejectLabel: config.rejectLabel || 'Cancelar',
      rejectButtonStyleClass: 'button-primary-outline',
      acceptButtonProps: {
          severity: 'primary',
      },
      accept: config.onAccept,
      reject: config.onReject
    });
  }

  confirmDelete(itemName: string, onConfirm: () => void) {
    this.primeNgConfirmationService.confirm({
      message: `¿Estás seguro de que deseas eliminar "${itemName}"?`,
      header: 'Confirmar eliminación',
      acceptLabel: 'Sí, eliminar',
      rejectLabel: 'Cancelar',
      rejectButtonStyleClass: 'button-primary-outline',
      acceptButtonProps: {
          severity: 'danger',
      },
      accept: onConfirm
    });
  }

  confirmDeleteCustom(config: ConfirmDialogOptions) {
    this.primeNgConfirmationService.confirm({
      header: config.header || 'Confirmación',
      message: config.message,
      icon: config.icon || '',
      acceptLabel: config.acceptLabel || 'Aceptar',
      rejectLabel: config.rejectLabel || 'Cancelar',
      rejectButtonStyleClass: 'button-primary-outline',
      acceptButtonProps: {
          severity: 'danger',
      },
      accept: config.onAccept
    });
  }
}
