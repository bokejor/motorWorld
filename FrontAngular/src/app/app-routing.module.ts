import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthorizatedGuard } from './services/authorizated.guard';
import { PublishComponent } from './pages/publish/publish.component';
import { MypostsComponent } from './pages/myposts/myposts.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { data: { id: 0 }, path: 'home', component: HomeComponent  },
  { data: { id: 1 }, path: 'motos', component: HomeComponent, canActivate: [AuthorizatedGuard]  },
  { data: { id: 2 }, path: 'coches', component: HomeComponent, canActivate: [AuthorizatedGuard]  },
  { data: { id: 3 }, path: 'comparador', component: HomeComponent, canActivate: [AuthorizatedGuard]  },
  { data: { id: 4 }, path: 'marcas', component: HomeComponent, canActivate: [AuthorizatedGuard]  },
  { path: 'publish', component: PublishComponent, canActivate: [AuthorizatedGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'favoritos', component: HomeComponent, canActivate: [AuthorizatedGuard]  },
  { path: 'anuncios', component: MypostsComponent, canActivate: [AuthorizatedGuard]  },
  { path: '**', redirectTo: 'home' }


];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
