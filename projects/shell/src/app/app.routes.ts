import { Type } from '@angular/core';
import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Home } from './home';
import { NotFound } from './not-found';
import { RemoteError } from './remote-error';

function remote(name: string): () => Promise<Type<unknown>> {
  return () =>
    loadRemoteModule(name, './Component')
      .then((m) => m.App as Type<unknown>)
      .catch((err) => {
        console.error(`Failed to load remote "${name}"`, err);
        return RemoteError;
      });
}

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Home },
  { path: 'mfe1', data: { remote: 'mfe1' }, loadComponent: remote('mfe1') },
  { path: 'mfe2', data: { remote: 'mfe2' }, loadComponent: remote('mfe2') },
  { path: '**', component: NotFound },
];
