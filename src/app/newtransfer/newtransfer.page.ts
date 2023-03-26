import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-newtransfer',
  templateUrl: './newtransfer.page.html',
  styleUrls: ['./newtransfer.page.scss'],
})
export class NewtransferPage implements OnInit {

  constructor(private navCtrl: NavController, private alertController: AlertController) { }
  checkInput(){
    const userinput1 = document.getElementById('Firstname')as HTMLIonInputElement;
    const userinput2 = document.getElementById('Lastname')as HTMLIonInputElement;
    const userinput3 = document.getElementById('Firstname')as HTMLIonInputElement;
    const userinput4 = document.getElementById('Lastname')as HTMLIonInputElement;
    const userinput5 = document.getElementById('Firstname')as HTMLIonInputElement;
    const userinput6 = document.getElementById('Lastname')as HTMLIonInputElement;
    const userinput7 = document.getElementById('Firstname')as HTMLIonInputElement;

    if(!userinput1.value || !userinput2.value || !userinput3.value || !userinput4.value || !userinput5.value || !userinput6.value || !userinput7.value ){
       const alert = this.alertController.create({message: 'Please enter an Input. Thanks.',
       buttons:['OK']});
       alert.then((alert)=> alert.present());
    } else{
      this.GotoOutputPage();
    }
  }
  GotoOutputPage(){
    const userinput1 = (document.getElementById('Firstname')as HTMLInputElement).value;
    const value1 = String(userinput1);
    const userinput2 = (document.getElementById('Lastname')as HTMLInputElement).value;
    const value2 = String(userinput2);
    const userinput3 = (document.getElementById('Middlename')as HTMLInputElement).value;
    const value3 = String(userinput3);
    const userinput4 = (document.getElementById('Address')as HTMLInputElement).value;
    const value4 = String(userinput4);
    const userinput5 = (document.getElementById('Coctact')as HTMLInputElement).value;
    const value5 = String(userinput5);
    const userinput6 = (document.getElementById('BloodT')as HTMLInputElement).value;
    const value6 = String(userinput6);
    const userinput7 = (document.getElementById('Birthdate')as HTMLInputElement).value;
    const value7 = String(userinput7);

    // this.navCtrl.navigateForward(['/enrollmentconfirmation-page',{userinput1, userinput2, userinput3, userinput4, userinput5, userinput6, userinput7 }]);

    const navigationExtras = {
      queryParams: {
        value1: value1,
        value2: value2,
        value3: value3,
        value4: value4,
        value5: value5,
        value6: value6,
        value7: value7,
      },
    };
    this.navCtrl.navigateForward(['/enrollmentconfirmation-page'], navigationExtras);
  }

  ngOnInit() {
  }

}
