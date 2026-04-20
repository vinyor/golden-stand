import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCardComponent } from './group-card.component';

describe('GroupCardComponent', () => {
  let fixture: ComponentFixture<GroupCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupCardComponent);
    fixture.componentRef.setInput('iconClass', 'pi pi-circle-fill');
    fixture.componentRef.setInput('iconColor', 'var(--color-primary)');
    fixture.componentRef.setInput('groupName', 'Test');
    fixture.componentRef.setInput('points', 100);
    fixture.componentRef.setInput('participantCount', 5);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
