import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuranchapterComponent } from './quranchapter.component';

describe('QuranchapterComponent', () => {
  let component: QuranchapterComponent;
  let fixture: ComponentFixture<QuranchapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuranchapterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuranchapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
