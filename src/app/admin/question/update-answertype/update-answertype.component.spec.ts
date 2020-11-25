import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnswertypeComponent } from './update-answertype.component';

describe('UpdateAnswertypeComponent', () => {
  let component: UpdateAnswertypeComponent;
  let fixture: ComponentFixture<UpdateAnswertypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAnswertypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAnswertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
