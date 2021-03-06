import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturesListComponent } from './cultures-list.component';

describe('CulturesListComponent', () => {
  let component: CulturesListComponent;
  let fixture: ComponentFixture<CulturesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
