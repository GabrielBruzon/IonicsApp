import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InecolwelcomePage } from './inecolwelcome.page';

describe('InecolwelcomePage', () => {
  let component: InecolwelcomePage;
  let fixture: ComponentFixture<InecolwelcomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InecolwelcomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InecolwelcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
