import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
const myRoute: Routes = [
  { path: '', component: PricingComponent },
  { path: 'lazy', loadChildren: () => import('./lazyload/newlazyload.module').then(m => m.NewLazyLoadModule) },
  { path: '**', component: NotfoundComponent }

];
import { AppComponent } from './app.component';
import { PricingComponent } from './pricing/pricing.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRouterModule } from './router.module';
import { Mycass } from './mypoewerpipe';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    NotfoundComponent,
    Mycass
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    RouterModule.forRoot(myRoute),
    ReactiveFormsModule, FormsModule,
    HttpClientModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
