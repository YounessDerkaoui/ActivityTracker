import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {

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
    { 
      title: 'Hiking Champion', 
      subtitle: 'Local Event', 
      description: 'Awarded for joinning in the Hiking Event.', 
      imageSrc: '/assets/img/Reward5.jpg',
      icon: 'star'
    },
    { 
      title: 'Swimming Champion', 
      subtitle: 'Local Competition', 
      description: 'Awarded for finishing in the Top 10 in the competition.', 
      imageSrc: '/assets/img/Reward6.jpg',
      icon: 'star'
    },
    
    // Add more cards as needed
  ];
}
