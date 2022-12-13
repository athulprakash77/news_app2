import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallnewsComponent } from './viewallnews.component';

describe('ViewallnewsComponent', () => {
  let component: ViewallnewsComponent;
  let fixture: ComponentFixture<ViewallnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
