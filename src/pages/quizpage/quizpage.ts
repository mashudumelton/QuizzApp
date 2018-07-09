import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuizpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizpage',
  templateUrl: 'quizpage.html',
})
export class QuizpagePage {
  question1:string;
  question2:'';
  question3:'';
  question4:'';
  question5:'';
  question6:'';
  question7:'';
  question8:'';
  question9:'';
  question10:'';
  question11:'';
  question12:'';
  question13:'';
  question14:'';
  question15:'';

question1msg:string;
   //dispay:number;
   total1:number;
   total2:number;
   total3:number;

  total: number;
  name:string;
  // display: number;
  Soccer: boolean;
  Animal:boolean =false;
  Mathematics: boolean=false;
  results:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.total =0 ;
        this.total1 =0;
        this.total2 =0 ;
        this.total3 =0;
        // this.display=0;
        this.results=false;
        this.Soccer = true;
        
        
  }
  Soccee(){
  this.Soccer = false;
  this.Animal = true;
  // console.log(this.total1);
}
amima(){
  this.Animal = false;
  this.Mathematics = true; 
  // console.log(this.total2);
}
mathe(){
  this.Mathematics = false;
  this.results = true; 
  
}
 

// onSubmit(){
  
  
//     this.display =1;
//   }

  answers(){
    
      ++this.total;
  }
  
  answers1(){
    ++this.total1;
}
answers2(){
  ++this.total2;
}
answers3(){
  ++this.total3;
}


  score(){
    console.log(this.total)
    console.log(this.total1)
    console.log(this.total2)
    console.log(this.total3)
  }
  
 
  
  Cancel(){
    
      this.name=" ";
      this.Soccer=false;
      // this.results=false;
      this.total=0;
      this.total1=0;
      this.total2=0;
      this.total3=0;
      
      
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizpagePage');
  }

}
