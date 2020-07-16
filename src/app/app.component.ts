import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

/**
 * Declares the WebChat property on the window object.
 */
declare global {
    interface Window {
        WebChat: any;
    }
}

window.WebChat = window.WebChat || {};

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {}
