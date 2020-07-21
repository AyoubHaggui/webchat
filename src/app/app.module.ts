import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
    declarations: [AppComponent, NotFoundComponent, ReclamationListComponent, UserListComponent],
    imports: [BrowserModule, AppRoutingModule,HttpClientModule,NgxDatatableModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
