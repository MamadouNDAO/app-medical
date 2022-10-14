import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCabinetComponent } from './search-cabinet.component';

describe('SearchCabinetComponent', () => {
  let component: SearchCabinetComponent;
  let fixture: ComponentFixture<SearchCabinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCabinetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
