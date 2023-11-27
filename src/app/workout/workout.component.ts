import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  workouts = [
    { name: 'Gym Strength Training', type: 'Strength', progress: 60, image: '/assets/img/gym.jpg' },
    { name: 'Outdoor Cardio', type: 'Cardio', progress: 75, image: '/assets/img/cardio.jpg' },
    { name: 'Marathon Prep', type: 'Endurance', progress: 50, image: '/assets/img/marathon.jpg' },
    // Add more workouts as needed
  ];
  userProgress = {
    overall: 70, // Overall progress percentage
    completed: 14, // Number of completed workouts
    remaining: 6 // Number of remaining workouts
  };

  dailyChallenge = {
    description: 'Complete a 5k run and share your time!'
  };

  upcomingEvents = [
    { name: 'Christmas Marathon', date: new Date(2023, 11, 21) },
    { name: 'Local 10k Race', date: new Date(2023, 11, 29) },
    // ... other events
  ];
  selectedDate: Date | null = new Date(); // Selected date for the calendar
  constructor() { }

  ngOnInit(): void {
  }

}
