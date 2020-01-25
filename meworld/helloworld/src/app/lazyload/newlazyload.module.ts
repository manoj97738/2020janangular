import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadComponent } from './lazyload.component';
const myRoute: Routes = [
    { path: '', component: LazyloadComponent },

];
@NgModule({
    declarations: [
        LazyloadComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(myRoute)
    ],
    providers: [

    ]
})
export class NewLazyLoadModule { }
