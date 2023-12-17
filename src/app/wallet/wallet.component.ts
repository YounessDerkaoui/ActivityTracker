import { Component, OnInit } from '@angular/core';

interface WorkoutBalance {
  date: string;
  description: string;
  points: number;
}

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  balanceSheet: WorkoutBalance[] = [];

  ngOnInit(): void {
    this.balanceSheet = this.getMockBalanceSheetData();
  }

  getMockBalanceSheetData(): WorkoutBalance[] {
    return [
      { date: '2023-03-01', description: '5K Run', points: 50 },
      { date: '2023-03-03', description: 'Yoga Session', points: 25 },
      { date: '2023-03-05', description: 'Cycling', points: 50 },
      { date: '2023-03-07', description: 'Swimming', points: 60 },
      { date: '2023-03-08', description: 'Gym Workout', points: 60 },
      { date: '2023-03-08', description: 'Gym discount', points: -200 },
      // Add more entries as needed
    ];
  }

  getTotalBalance(): number {
    return this.balanceSheet.reduce((total, entry) => total + entry.points, 0);
  }
}
