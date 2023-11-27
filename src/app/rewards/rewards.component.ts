import { Component } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent {
  cardData = [
    { 
      title: 'Marathon Champion', 
      subtitle: 'Local Marathon', 
      description: 'Awarded for finishing first in the local marathon.', 
      imageSrc: '/assets/img/Reward1.jpg',
      icon: 'star'
    },
    {
      title: 'Fitness Enthusiast', 
      subtitle: 'Daily Challenges', 
      description: 'Completed all daily fitness challenges for a month.', 
      imageSrc: '/assets/img/Reward2.jpg',
      icon: 'star'
    },
    { 
      title: 'Cyclist Champion', 
      subtitle: 'Local Tour', 
      description: 'Awarded for joinning the the local tour.', 
      imageSrc: '/assets/img/Reward3.jpg',
      icon: 'star'
    },
    { 
      title: 'Gym Champion', 
      subtitle: 'Gym enthusiast', 
      description: 'Awarded for going to the gym for 3 months consistently.', 
      imageSrc: '/assets/img/Reward4.jpg',
      icon: 'star'
    },
    
    // Add more cards as needed
  ];
}
