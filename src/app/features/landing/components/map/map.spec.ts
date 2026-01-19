import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapComponent } from './map';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).IntersectionObserver = class {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      observe() {}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      unobserve() {}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      disconnect() {}
    };
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render iframe with google maps', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const iframe = compiled.querySelector('iframe');
    expect(iframe).toBeTruthy();
  });

  it('should have safe map URL', () => {
    expect(component.safeMapUrl).toBeTruthy();
  });

  it('should use data from app-info', () => {
    expect(component.mapData).toBeTruthy();
    expect(component.mapData.embedUrl).toContain('google.com/maps');
  });
});
