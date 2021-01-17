import { MerakedilenlerkayitComponent } from './components/merakedilenlerkayit/merakedilenlerkayit.component';
import { UyekayitComponent } from './components/uyekayit/uyekayit.component';
import { UyegirisComponent } from './components/uyegiris/uyegiris.component';
import { Yonetici_panelComponent } from './components/yonetici_panel/yonetici_panel.component';
import { MallarComponent } from './components/mallar/mallar.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';

import { BizeUlasinComponent } from './components/BizeUlasin/BizeUlasin.component';
import { MerakedilenlerComponent } from './components/merakedilenler/merakedilenler.component';




@NgModule({
  declarations: [
    AppComponent,
    Yonetici_panelComponent,
    LoginComponent,
    KayitlarComponent,
    MallarComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    UyegirisComponent,
    UyekayitComponent,
    AnasayfaComponent,
    BizeUlasinComponent,
    MerakedilenlerkayitComponent,
    MerakedilenlerComponent,
    





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
