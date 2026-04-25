import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationChromeService } from '../../core/navigation/navigation-chrome.service';

type RankingPlayer = {
  name: string;
  score: number;
};

@Component({
  selector: 'app-rankings',
  imports: [],
  templateUrl: './rankings.html',
  styleUrl: './rankings.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Rankings {
  protected readonly chrome = inject(NavigationChromeService);

  private readonly players: RankingPlayer[] = [
    { name: 'Liam Carter', score: 1480 },
    { name: 'Noah Baker', score: 1370 },
    { name: 'Emma Johnson', score: 1320 },
    { name: 'Sofia Reed', score: 1240 },
    { name: 'Mia Turner', score: 1180 },
    { name: 'Lucas Walker', score: 1100 },
    { name: 'Ava Collins', score: 980 },
  ];

  protected readonly ranking = [...this.players].sort((a, b) => b.score - a.score);
  protected readonly topThree = this.ranking.slice(0, 3);
  protected readonly otherParticipants = this.ranking.slice(3);
}
