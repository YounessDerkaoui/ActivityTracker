import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  cardData = [
    { title: '150$', text: '10.- CHF discount on your health insurance by XX', imageSrc: '/assets/img/insurance1.jpg' , icon : 'monetization_on'},
    { title: '150$', text: '15.- CHF discount on your health insurance by XX', imageSrc: '/assets/img/achievement.png', icon : 'attach_money'},
    { title: '150$', text: '20.- CHF discount on your health insurance by XX', imageSrc: '/assets/img/achievement.png', icon : 'add'},
    { title: '150$', text: '10% discount on sports gears by shop YY', imageSrc: '/assets/img/achievement.png', icon : 'add'},
    { title: '150$', text: '15% discount on sports gears by shop YY', imageSrc: '/assets/img/achievement.png', icon : 'add'},
    { title: '150$', text: '20% discount on sports gears by shop YY', imageSrc: '/assets/img/achievement.png', icon : 'add'},
    { title: '150$', text: '10% discount on nutritions by shop YY', imageSrc: '/assets/img/achievement.png', icon : 'add'},
    { title: '150$', text: '15% discount on nutritions by shop YY', imageSrc: '/assets/img/achievement.png', icon : 'add'},
    { title: '150$', text: '20% discount on nutritions by shop YY', imageSrc: '/assets/img/achievement.png', icon : 'add'},
  ];

}
