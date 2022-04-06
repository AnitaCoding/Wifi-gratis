import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FichaPuntoWifiPage } from './ficha-punto-wifi.page';

describe('FichaPuntoWifiPage', () => {
  let component: FichaPuntoWifiPage;
  let fixture: ComponentFixture<FichaPuntoWifiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaPuntoWifiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FichaPuntoWifiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
