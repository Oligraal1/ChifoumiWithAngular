import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  GameComponent
} from './game/game.component';
import {
  AppComponent
} from './app.component';
import {
  HomeComponent
} from './home/home.component';
import {
  RuleComponent
} from './rule/rule.component';


const chifoumiRoutes: Routes = [{
    path: 'game',
    component: GameComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'rule',
    component: RuleComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(chifoumiRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
