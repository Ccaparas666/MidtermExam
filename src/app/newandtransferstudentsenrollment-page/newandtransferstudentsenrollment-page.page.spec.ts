import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewandtransferstudentsenrollmentPagePage } from './newandtransferstudentsenrollment-page.page';

describe('NewandtransferstudentsenrollmentPagePage', () => {
  let component: NewandtransferstudentsenrollmentPagePage;
  let fixture: ComponentFixture<NewandtransferstudentsenrollmentPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewandtransferstudentsenrollmentPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewandtransferstudentsenrollmentPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
