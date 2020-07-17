import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { WebChatComponent } from './web-chat/web-chat.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [AppComponent, WebChatComponent, NotFoundComponent, ReclamationListComponent],
    imports: [BrowserModule, AppRoutingModule,HttpClientModule,NgxDatatableModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
