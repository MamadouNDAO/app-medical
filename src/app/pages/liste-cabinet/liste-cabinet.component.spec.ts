import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCabinetComponent } from './liste-cabinet.component';

describe('ListeCabinetComponent', () => {
  let component: ListeCabinetComponent;
  let fixture: ComponentFixture<ListeCabinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCabinetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
