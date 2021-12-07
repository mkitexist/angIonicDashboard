import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewInstallComponent } from './preview-install.component';

describe('PreviewInstallComponent', () => {
  let component: PreviewInstallComponent;
  let fixture: ComponentFixture<PreviewInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewInstallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
