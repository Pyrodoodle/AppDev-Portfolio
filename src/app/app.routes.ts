import { Routes } from '@angular/router';


import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about-resume', component: About },
  { path: 'contact', component: Contact },
];
