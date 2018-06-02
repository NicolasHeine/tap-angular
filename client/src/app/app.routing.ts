// Importer les modules
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importer le composant à utiliser dans le route
import { HomeComponent } from './components/home/home.component';
import { MeComponent } from './components/me/me.component';
import { TapComponent } from './components/tap/tap.component';

// Création du tableau de routes
const appRoutes: Routes = [

  // Définition de la route principale
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'me',
    component: MeComponent
  },
  {
    path: 'tap',
    component: TapComponent
  }
];

// Exporter le Routing
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);