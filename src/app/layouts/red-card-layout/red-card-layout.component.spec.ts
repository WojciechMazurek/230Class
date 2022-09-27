import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedCardLayoutComponent } from './red-card-layout.component';

describe('RedCardLayoutComponent', () => {
  let component: RedCardLayoutComponent;
  let fixture: ComponentFixture<RedCardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedCardLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedCardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
