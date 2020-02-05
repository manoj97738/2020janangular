import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
const myRoute: Routes = [
    { path: 'contact/:id/:name', component: ContactComponent },
    { path: 'aboutus', component: AboutusComponent }

];
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { MyService } from "./common.service";
@NgModule({
    declarations: [
        ContactComponent,
        AboutusComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(myRoute),
        ReactiveFormsModule, FormsModule,

    ],
    exports: [
        RouterModule,
        ContactComponent,
        AboutusComponent
    ],
    providers: [
        MyService
    ]
})
export class AppRouterModule { }
