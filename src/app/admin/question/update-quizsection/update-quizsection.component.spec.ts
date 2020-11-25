import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuizsectionComponent } from './update-quizsection.component';

describe('UpdateQuizsectionComponent', () => {
  let component: UpdateQuizsectionComponent;
  let fixture: ComponentFixture<UpdateQuizsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateQuizsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQuizsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
