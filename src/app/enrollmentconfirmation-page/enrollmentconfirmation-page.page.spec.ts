import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnrollmentconfirmationPagePage } from './enrollmentconfirmation-page.page';

describe('EnrollmentconfirmationPagePage', () => {
  let component: EnrollmentconfirmationPagePage;
  let fixture: ComponentFixture<EnrollmentconfirmationPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentconfirmationPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnrollmentconfirmationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
