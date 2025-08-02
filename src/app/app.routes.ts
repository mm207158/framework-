import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Portofolio } from './components/portofolio/portofolio';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // أول ما يفتح يروح لـ home
  { path: 'home', component: Home },
    {path:"about", component:About},
    {path:"portofolio", component:Portofolio},
    {path:"contact", component:Contact}
];
