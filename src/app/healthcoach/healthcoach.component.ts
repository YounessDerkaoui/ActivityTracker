import { Component } from '@angular/core';

@Component({
  selector: 'app-healthcoach',
  templateUrl: './healthcoach.component.html',
  styleUrls: ['./healthcoach.component.scss']
})
export class HealthcoachComponent {
  // Add a videoUrl field to each card
  cardData = [
    {
      title: 'Nutrition Tips',
      subtitle: 'Healthy Eating Habits',
      imageSrc: '/assets/img/nutritionvideo.jpg',
      description: 'Discover the secrets to a balanced diet with our expert nutrition tips.',
      videoUrl: 'https://www.youtube.com/watch?v=PM8kiHcAD7Q',
      icon: 'local_dining'
    },
    {
      title: 'Workout Routines',
      subtitle: 'Exercises for All Levels',
      imageSrc: '/assets/img/workoutvideo.jpg',
      description: 'Find your perfect workout plan, whether you’re a beginner or a pro.',
      videoUrl: 'https://www.youtube.com/watch?v=Cld_CNySaE4',
      icon: 'fitness_center'
    },
    {
      title: 'Mindfulness',
      subtitle: 'Mental Wellness',
      imageSrc: '/assets/img/mindfulness.jpg',
      description: 'Learn how to reduce stress and live in the moment with our mindfulness techniques.',
      videoUrl: 'https://www.example.com/mindfulness-video',
      icon: 'self_improvement',
    },
    {
      title: 'Sleep Better',
      subtitle: 'Improving Sleep Quality',
      imageSrc: '/assets/img/sleep.jpg',
      description: 'Struggling to sleep? Discover methods to improve your sleep quality and wake up refreshed.',
      videoUrl: 'https://www.example.com/sleep-video',
      icon: 'bedtime'
    },
    // ... (other cards)
  ];

  goToVideo(url: string): void {
    window.open(url, '_blank');
  }
}