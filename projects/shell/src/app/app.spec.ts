import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render sidebar, header and footer', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('aside')).toBeTruthy();
    expect(el.querySelector('header')).toBeTruthy();
    expect(el.querySelector('footer')).toBeTruthy();
    expect(el.querySelectorAll('nav a').length).toBe(3);
  });
});
