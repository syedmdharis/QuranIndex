import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurahDetailComponent } from './surah-detail.component';

describe('SurahDetailComponent', () => {
  let component: SurahDetailComponent;
  let fixture: ComponentFixture<SurahDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurahDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurahDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
