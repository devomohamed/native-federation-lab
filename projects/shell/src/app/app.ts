import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';

interface NavItem {
  label: string;
  path: string;
  icon: string;
  description: string;
}

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private readonly router = inject(Router);

  protected readonly year = new Date().getFullYear();
  protected readonly sidebarOpen = signal(false);

  protected readonly navItems: NavItem[] = [
    { label: 'Home', path: '/', icon: '🏠', description: 'Overview of the platform' },
    { label: 'MFE 1', path: '/mfe1', icon: '🚀', description: 'First micro frontend' },
    { label: 'MFE 2', path: '/mfe2', icon: '🎨', description: 'Second micro frontend' },
  ];

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  protected pageTitle(): string {
    const url = this.url().split(/[?#]/)[0];
    return this.navItems.find((i) => i.path === url)?.label ?? 'Not found';
  }

  protected toggleSidebar(): void {
    this.sidebarOpen.update((v) => !v);
  }

  protected closeSidebar(): void {
    this.sidebarOpen.set(false);
  }
}
