import { UyekayitComponent } from './components/uyekayit/uyekayit.component';
import { UyegirisComponent } from './components/uyegiris/uyegiris.component';
import { Yonetici_panelComponent } from './components/yonetici_panel/yonetici_panel.component';
import { MallarComponent } from './components/mallar/mallar.component';
import { BizeUlasinComponent } from './components/BizeUlasin/BizeUlasin.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { MerakedilenlerComponent } from './components/merakedilenler/merakedilenler.component';






const redirectLogin = () => redirectUnauthorizedTo(['/login']);
const routes: Routes = [

  {
    path: '',
    component:
     AnasayfaComponent,

  }
  ,
  { path: 'login', component: LoginComponent },
  { path: 'kayitlar', component: KayitlarComponent },

  { path: 'BizeUlasin', component: BizeUlasinComponent },
  { path: 'mallar', component: MallarComponent },
  { path: 'yonetici_panel', component: Yonetici_panelComponent, canActivate: [AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectLogin
  }},
  { path: 'uyegiris', component: UyegirisComponent },
  { path: 'uyekayit', component: UyekayitComponent },
  { path: 'merakedilenler', component: MerakedilenlerComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
