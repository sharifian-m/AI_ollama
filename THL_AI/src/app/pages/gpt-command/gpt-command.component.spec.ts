import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GptCommandComponent } from './gpt-command.component';

describe('GptCommandComponent', () => {
  let component: GptCommandComponent;
  let fixture: ComponentFixture<GptCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GptCommandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GptCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
