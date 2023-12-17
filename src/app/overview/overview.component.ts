import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  cardData = [
    { title: 'Workouts',subtitle: 'Personalized Workout Plans', imageSrc: '/assets/img/achievement.png', content: ['10K Marathon Prep', 'Daily Fitness Challenges',] , icon : 'verified', buttons : ['DETAILS'], share : true},
    { title: 'Achievements', subtitle: 'Your achievements', imageSrc: '/assets/img/Rewards.png', content: ['1 (XRP)', '0.0023 (ETH)'], icon : 'score', buttons : ['DETAILS'], share : false},
    { title: 'Leaderboard', subtitle: 'Your rank in comparison to other users', imageSrc: '/assets/img/Leaderboard.png', content: ['Ranked \'15 256\' (Luzern)', 'Ranked \'2 930 019\' (Switzerland)'], icon : 'leaderboard', buttons : ['DETAILS'], share : true },
    { title: 'Wallet', subtitle: 'Transactions', imageSrc: '/assets/img/Wallet.png', content: ['Check your balance'], icon : 'payment', buttons : ['DETAILS'], share : false },
    { title: 'Progress Tracking', subtitle: 'Set your goals', imageSrc: '/assets/img/progress.jpg', content: ['Hit the gym 3 days a week', 'Track your consistancy'], icon : 'timeline', buttons : ['DETAILS', 'ADD NEW'], share : false },
    { title: 'Health Coach', subtitle:  'Daily Motivation & Guidance', imageSrc: '/assets/img/Coach.png', content: ['Nutritional Advice', 'Mindfulness & Stress Management'], icon : 'format_quote', buttons : [], share : true },
    { title: 'Support and Help Center', subtitle: 'Customer support', imageSrc: '/assets/img/support.jpg', content: ['Ask for assistance', 'Contact us'], icon : 'live_help', buttons : ['HELP'], share : false },
    { title: 'Shop', subtitle: 'Redeem points', imageSrc: '/assets/img/shop.jpg', content: ['Exchange currency', 'Shop products'], icon : 'shopping_cart', buttons : ['DETAILS'], share : false },
  ];

}
