import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MagazineComponent } from './pages/magazine/magazine.component';
import { AdvertiseComponent } from './pages/advertise/advertise.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { ArchivesComponent } from './pages/archives/archives.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Travel Bharat — Every Journey Has A Story' },
  { path: 'about', component: AboutComponent, title: 'About — Travel Bharat' },
  { path: 'magazine', component: MagazineComponent, title: 'The Magazine — Travel Bharat' },
  { path: 'advertise', component: AdvertiseComponent, title: 'Advertise With Us — Travel Bharat' },
  { path: 'blogs', component: BlogsComponent, title: 'Blogs — Travel Bharat' },
  { path: 'blogs/:slug', component: BlogDetailComponent, title: 'Story — Travel Bharat' },
  { path: 'archives', component: ArchivesComponent, title: 'Archives — Travel Bharat' },
  { path: 'contact', component: ContactComponent, title: 'Contact — Travel Bharat' },
  { path: '**', redirectTo: '' }
];
