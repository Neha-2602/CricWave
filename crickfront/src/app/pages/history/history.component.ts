import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatchCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit {
  allMatch: any;
  constructor(private _api: ApiCallService) {}
  ngOnInit(): void {
    this._api.getAllMatches().subscribe({
      next: (data) => {
        this.allMatch = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
