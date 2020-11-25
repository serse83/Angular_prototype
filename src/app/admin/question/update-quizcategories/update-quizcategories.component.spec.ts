import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuizcategoriesComponent } from './update-quizcategories.component';

describe('UpdateQuizcategoriesComponent', () => {
  let component: UpdateQuizcategoriesComponent;
  let fixture: ComponentFixture<UpdateQuizcategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateQuizcategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQuizcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
