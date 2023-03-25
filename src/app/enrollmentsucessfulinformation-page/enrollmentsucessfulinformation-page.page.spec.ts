import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnrollmentsucessfulinformationPagePage } from './enrollmentsucessfulinformation-page.page';

describe('EnrollmentsucessfulinformationPagePage', () => {
  let component: EnrollmentsucessfulinformationPagePage;
  let fixture: ComponentFixture<EnrollmentsucessfulinformationPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentsucessfulinformationPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnrollmentsucessfulinformationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
