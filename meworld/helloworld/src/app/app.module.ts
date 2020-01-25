import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    RouterModule.forRoot(myRoute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
