import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-match-card',
  standalone: true,
  imports: [],
  templateUrl: './match-card.component.html',
  styleUrl: './match-card.component.css',
})
export class MatchCardComponent {
  @Input() match: any;
}
