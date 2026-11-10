import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-remote-error',
  imports: [RouterLink],
  template: `
    <div class="box">
      <h2>⚠️ {{ name }} is unavailable</h2>
      <p>The remote could not be loaded. Make sure it is running, then reload the page.</p>
      <code>npx ng serve {{ name }}</code>
      <p><a routerLink="/">Back home</a></p>
    </div>
  `,
  styles: `
    .box { text-align: center; padding: 3rem 1rem; }
    h2 { color: #b91c1c; }
    code { display: inline-block; padding: .4rem .8rem; border-radius: .5rem; background: #e2e8f0; }
    a { color: #4338ca; font-weight: 600; }
  `,
})
export class RemoteError {
  protected readonly name: string = inject(ActivatedRoute).snapshot.data['remote'] ?? 'remote';
}
