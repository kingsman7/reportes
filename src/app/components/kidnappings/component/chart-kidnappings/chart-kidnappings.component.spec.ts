import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatKidnappingsComponent } from './chat-kidnappings.component';

describe('ChatKidnappingsComponent', () => {
  let component: ChatKidnappingsComponent;
  let fixture: ComponentFixture<ChatKidnappingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatKidnappingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatKidnappingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
