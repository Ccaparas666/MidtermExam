import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-studentstatus-page',
  templateUrl: './studentstatus-page.page.html',
  styleUrls: ['./studentstatus-page.page.scss'],
})
export class StudentstatusPagePage implements OnInit {

  constructor(private navCtrl: NavController) { }
  checkbox1: boolean = false;
  checkbox2: boolean = false;
  checkbox3: boolean = false;

  Select:  String = '';
  goToSettings(){
    this.navCtrl.navigateForward('settings-page');
  }

  goToEnrollment(){
    const test1 = document.getElementById('test') as HTMLIonRadioGroupElement
    let test = String(test1);
    //  let Select ={
    //   checkbox1: this.checkbox1,
    //   checkbox2: this.checkbox2,
    //   checkbox3: this.checkbox3,

    //  }
   
  
    if(test = '1'){
      this.navCtrl.navigateForward('newandtransferstudentsenrollment-page');
      console.log(test)
    }else if (test = '2'){
      this.navCtrl.navigateForward('oldstudentenrollment-page');
    }else if (test = '3'){
      this.navCtrl.navigateForward('newandtransferstudentsenrollment-page');
    }
    console.log(test1)
    
  }

  ngOnInit() {
  }

}
