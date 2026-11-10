import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  it('should render and count clicks', async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h2')?.textContent).toContain('MFE 2');
    el.querySelector('button')!.click();
    await fixture.whenStable();
    expect(el.querySelector('button')?.textContent).toContain('1 times');
  });
});
