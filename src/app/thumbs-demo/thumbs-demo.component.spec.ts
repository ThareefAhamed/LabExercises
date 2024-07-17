import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbsDemoComponent } from './thumbs-demo.component';

describe('ThumbsDemoComponent', () => {
  let component: ThumbsDemoComponent;
  let fixture: ComponentFixture<ThumbsDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThumbsDemoComponent]
    });
    fixture = TestBed.createComponent(ThumbsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
