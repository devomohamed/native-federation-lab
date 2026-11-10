import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="box">
      <h2>404</h2>
      <p>This page does not exist.</p>
      <a routerLink="/">Back home</a>
    </div>
  `,
  styles: `
    .box { text-align: center; padding: 3rem 1rem; }
    h2 { font-size: 4rem; margin: 0; color: #4338ca; }
    a { color: #4338ca; font-weight: 600; }
  `,
})
export class NotFound {}
