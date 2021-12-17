import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import {GalleryComponent} from './gallery/gallery.component';
import { RegistryComponent } from './registry/registry.component';

const routes: Routes = [
{path: 'home', component: HomeComponent },
{path: 'rsvp', component: RsvpComponent},
{path: 'registry', component: RegistryComponent},
{path: 'gallery', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
