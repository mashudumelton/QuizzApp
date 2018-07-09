import { QuizpagePage } from './../quizpage/quizpage';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public nav: NavController) {
    
  }


onClick(){
  this.nav.push(QuizpagePage);
}

}
