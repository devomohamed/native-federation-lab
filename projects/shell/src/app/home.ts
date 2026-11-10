import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <section class="hero">
      <h2>Welcome to the Federation Lab</h2>
      <p>A shell hosting independently deployed micro frontends with Native Federation.</p>
    </section>
    <div class="cards">
      <a class="card" routerLink="/mfe1"><span>🚀</span><h3>MFE 1</h3><p>Open the first remote.</p></a>
      <a class="card" routerLink="/mfe2"><span>🎨</span><h3>MFE 2</h3><p>Open the second remote.</p></a>
    </div>
  `,
  styles: `
    .hero { padding: 2rem; border-radius: 1.25rem; color: #fff;
      background: linear-gradient(135deg, #6366f1, #06b6d4); margin-bottom: 1.5rem; }
    h2 { margin: 0 0 .5rem; }
    .hero p { margin: 0; opacity: .9; }
    .cards { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
    .card { display: block; padding: 1.25rem; border-radius: 1rem; background: #fff; color: inherit;
      text-decoration: none; box-shadow: 0 4px 14px rgba(30, 27, 75, .08); transition: transform .2s, box-shadow .2s; }
    .card:hover { transform: translateY(-4px); box-shadow: 0 10px 24px rgba(30, 27, 75, .15); }
    .card span { font-size: 1.75rem; }
    .card h3 { margin: .5rem 0 .25rem; }
    .card p { margin: 0; color: #64748b; }
  `,
})
export class Home {}
