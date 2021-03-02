import { helloWorld } from './hello-world.js';
import nunjucks from 'nunjucks';

nunjucks.configure('.', { autoescape: true });
nunjucks.render('index.html', { foo: 'bar' });

helloWorld();
