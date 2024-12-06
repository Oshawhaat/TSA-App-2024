import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTeamsComponent } from './import-teams.component';

describe('ImportTeamsComponent', () => {
  let component: ImportTeamsComponent;
  let fixture: ComponentFixture<ImportTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportTeamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
