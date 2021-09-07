import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSingleComponent } from './icon-single.component';

describe('IconSingleComponent', () => {
  let component: IconSingleComponent;
  let fixture: ComponentFixture<IconSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
