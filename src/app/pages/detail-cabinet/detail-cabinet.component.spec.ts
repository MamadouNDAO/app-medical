import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCabinetComponent } from './detail-cabinet.component';

describe('DetailCabinetComponent', () => {
  let component: DetailCabinetComponent;
  let fixture: ComponentFixture<DetailCabinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCabinetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
