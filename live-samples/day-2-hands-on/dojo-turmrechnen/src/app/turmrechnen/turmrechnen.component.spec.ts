import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmrechnenComponent } from './turmrechnen.component';

describe('TurmrechnenComponent', () => {
  let component: TurmrechnenComponent;
  let fixture: ComponentFixture<TurmrechnenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmrechnenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmrechnenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
