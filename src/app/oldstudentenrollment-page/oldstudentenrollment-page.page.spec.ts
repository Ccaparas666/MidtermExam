import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OldstudentenrollmentPagePage } from './oldstudentenrollment-page.page';

describe('OldstudentenrollmentPagePage', () => {
  let component: OldstudentenrollmentPagePage;
  let fixture: ComponentFixture<OldstudentenrollmentPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OldstudentenrollmentPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OldstudentenrollmentPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
