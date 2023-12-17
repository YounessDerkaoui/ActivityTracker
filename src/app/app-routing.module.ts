import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ShopComponent } from './shop/shop.component';
import { HealthcoachComponent } from './healthcoach/healthcoach.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { WalletComponent } from './wallet/wallet.component';
import { WorkoutComponent } from './workout/workout.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path : 'overview' , component : OverviewComponent },
  { path : 'workout' , component : WorkoutComponent },
  { path : 'achievements' , component : AchievementsComponent },
  { path : 'healthcoach' , component : HealthcoachComponent },
  { path : 'wallet' , component : WalletComponent },
  { path : 'shop' , component : ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
