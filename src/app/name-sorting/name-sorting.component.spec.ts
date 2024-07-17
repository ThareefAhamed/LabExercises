import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameSortingComponent } from './name-sorting.component';

describe('NameSortingComponent', () => {
  let component: NameSortingComponent;
  let fixture: ComponentFixture<NameSortingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameSortingComponent]
    });
    fixture = TestBed.createComponent(NameSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
