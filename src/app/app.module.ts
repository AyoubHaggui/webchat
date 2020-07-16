import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";


import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { WebChatComponent } from './web-chat/web-chat.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [AppComponent, WebChatComponent, NotFoundComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
