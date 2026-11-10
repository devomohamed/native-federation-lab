import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-mfe2',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly count = signal(0);

  protected increment(): void {
    this.count.update((c) => c + 1);
  }
}
