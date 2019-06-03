import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCardComponent } from './member-card/member-card.component';

const appRoutes: Routes =[
  { path: 'members-list', component: MemberListComponent },
  { path: 'welcome', component: WelcomeComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    MemberListComponent,
    MemberCardComponent,
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
