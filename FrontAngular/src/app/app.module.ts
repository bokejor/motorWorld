import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PublishComponent } from './pages/publish/publish.component';
import { MypostsComponent } from './pages/myposts/myposts.component';


registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SlideshowComponent,
    PostsComponent,
    HomeComponent,
    LoginComponent,
    PublishComponent,
    MypostsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzSelectModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
