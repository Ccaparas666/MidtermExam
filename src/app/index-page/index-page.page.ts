import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.page.html',
  styleUrls: ['./index-page.page.scss'],
})
export class IndexPagePage implements OnInit {

  constructor(private navCtrl: NavController) { }
  
  goToSettings(){
    this.navCtrl.navigateForward('settings-page');
  }

  goToStatuspage(){
    this.navCtrl.navigateForward('studentstatus-page');
  }
  ngOnInit() {
  }

}
