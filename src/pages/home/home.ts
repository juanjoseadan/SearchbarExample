import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public keyword: string = '';

  constructor(public navCtrl: NavController) {

  }


  search() {
    console.log('Searching this keyword: ' + this.keyword);
  }

  cancelSearch(t, evt) {
    console.log('Here I need to close the keyboard, but it keeps opening every time you hit the Cancel button... You need to tap in the ion content to close the keyboard');
  }
}
