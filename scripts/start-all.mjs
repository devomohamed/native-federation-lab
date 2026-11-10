import { spawn } from 'node:child_process';

const apps = ['mfe1', 'mfe2', 'shell'];
const children = apps.map((app) =>
  spawn(`npx ng serve ${app}`, { stdio: 'inherit', shell: true }),
);

const stop = () => children.forEach((c) => c.kill());
process.on('SIGINT', stop);
process.on('exit', stop);
