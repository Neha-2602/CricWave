import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css',
})
export class PointTableComponent implements OnInit {
  pointTable: any;
  tableHeading: any;
  constructor(private _api: ApiCallService) {}
  ngOnInit(): void {
    this._api.getPointTable().subscribe({
      next: (data) => {
        this.pointTable = data;
        this.tableHeading = [...this.pointTable[0]];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
