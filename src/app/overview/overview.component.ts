import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  cardData = [
    { title: 'Achievements', subtitle: 'Your latest achievements', imageSrc: '/assets/img/achievement.png', content: ['Run 5Km', 'Run 10Km'] , icon : 'verified', buttons : ['DETAILS'], share : true},
    { title: 'Points Earned', subtitle: 'Total crypto currency earned', imageSrc: '/assets/img/earnings.jpg', content: ['1 (XRP)', '0.0023 (ETH)'], icon : 'score', buttons : ['DETAILS'], share : false},
    { title: 'Leaderboard', subtitle: 'Your rank in comparison to other users', imageSrc: '/assets/img/leaderboard.jpg', content: ['Ranked \'15 256\' (Luzern)', 'Ranked \'2 930 019\' (Switzerland)'], icon : 'leaderboard', buttons : ['DETAILS'], share : true },
    { title: 'Redeem Points', subtitle: 'Make transactions', imageSrc: '/assets/img/redeem.jpg', content: ['Exchange currency', 'Shop products'], icon : 'payment', buttons : ['WALLET'], share : false },
    { title: 'Progress Tracking', subtitle: 'Set your goals', imageSrc: '/assets/img/progress.jpg', content: ['Hit the gym 4 days a week', 'Be consistent'], icon : 'timeline', buttons : ['DETAILS', 'ADD NEW'], share : false },
    { title: 'Quote of the day', subtitle: 'Inspiring words', imageSrc: '/assets/img/quotes.jpg', content: ['"Less is More"'], icon : 'format_quote', buttons : [], share : true },
    { title: 'Support and Help Center', subtitle: 'Customer support', imageSrc: '/assets/img/support.jpg', content: ['Ask for assistance', 'Contact us'], icon : 'live_help', buttons : ['HELP'], share : false },
  ];

}
