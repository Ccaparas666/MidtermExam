import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-newandtransferstudentsenrollment-page',
  templateUrl: './newandtransferstudentsenrollment-page.page.html',
  styleUrls: ['./newandtransferstudentsenrollment-page.page.scss'],
})
export class NewandtransferstudentsenrollmentPagePage implements OnInit {
  //INPUT PERSONAL INFORMATION
  //Checkbox
  option1: boolean = false;
  option2: boolean = false;
  option3: boolean = false;
  option4: boolean = false;
  checkbox1: boolean = false;
  checkbox2: boolean = false;
  checkbox3: boolean = false;
  checkbox4: boolean = false;
  checkbox5: boolean = false;
  checkbox6: boolean = false;
  checkbox7: boolean = false;
  selectedOption: string = '';
  selectedOption2: string = '';


  isChecked1: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;
  isChecked4: boolean = false;
  isChecked5: boolean = false;
  isChecked6: boolean = false;

  


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

    let selectedOptions = {
      option1: this.option1,
      option2: this.option2,
      option3: this.option3,
      option4: this.option4,
      checkbox1: this.checkbox1,
      checkbox2: this.checkbox2,
      checkbox3: this.checkbox3,
      checkbox4: this.checkbox4,
      checkbox5: this.checkbox5,
      checkbox6: this.checkbox6,
      checkbox7: this.checkbox7,
    };

    const navigationExtras = {
      queryParams: {
        selectedOptions: JSON.stringify(selectedOptions),
        selectedOption2: this.selectedOption2,
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
