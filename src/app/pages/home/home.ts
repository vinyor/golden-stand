import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Button } from 'primeng/button';
import { GroupCardComponent } from '../../ui/group-card/group-card.component';
import { Router } from '@angular/router';
import {
  JoinGroupDialog,
  JoinGroupPayload,
} from './modals/join-group-dialog/join-group-dialog';

export interface ActiveGroupCard {
  id: string;
  groupName: string;
  points: number;
  participantCount: number;
  iconClass: string;
  iconColor: string;
}

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, Button, GroupCardComponent, JoinGroupDialog],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly router = inject(Router);

  protected readonly joinGroupDialogOpen = signal(false);

  protected navigateToCreateGroup(): void {
    void this.router.navigate(['/create-group']);
  }

  protected openJoinGroupDialog(): void {
    this.joinGroupDialogOpen.set(true);
  }

  protected onJoinGroupDialogDismiss(): void {
    this.joinGroupDialogOpen.set(false);
  }

  protected onJoinGroupRequest(_payload: JoinGroupPayload): void {
    this.joinGroupDialogOpen.set(false);
    // TODO: call join-group API when available
  }

  protected readonly activeGroups: readonly ActiveGroupCard[] = [
    {
      id: '1',
      groupName: 'EURO ELITE 2024',
      points: 742,
      participantCount: 24,
      iconClass: 'pi pi-circle-fill',
      iconColor: 'var(--color-primary)',
    },
    {
      id: '2',
      groupName: 'CHAMPIONS LEAGUE PRO',
      points: 1205,
      participantCount: 156,
      iconClass: 'pi pi-trophy',
      iconColor: 'var(--color-secondary)',
    },
    {
      id: '3',
      groupName: 'WEEKEND WARRIORS',
      points: 430,
      participantCount: 8,
      iconClass: 'pi pi-chart-bar',
      iconColor: 'var(--color-primary)',
    },
  ];
}
