import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "web-chat",
    templateUrl: "./web-chat.component.html",
    styleUrls: ["./web-chat.component.scss"],
})
export class WebChatComponent implements OnInit {
  @ViewChild("botWindow" , {static : true}) botWindowElement: ElementRef;

    public UserId: string;

    /**
     *
     */
    constructor(private _route: ActivatedRoute) {}

    public ngOnInit(): void {
        this._route.paramMap.subscribe((params) => {
            this.UserId = params.get("userId");

            const directLine = window.WebChat.createDirectLine({
                secret: "wDHNjKX0RnE.MF1gQlSKI3GqCQK9pterbNLMAvSxH9BX9S95rQK-mVw",
                webSocket: false,
            });

            window.WebChat.renderWebChat(
                {
                    directLine: directLine,
                    userID: "USER_ID",
                },
                this.botWindowElement.nativeElement
            );

            directLine
                .postActivity({
                    from: { id: "USER_ID", name: "USER_NAME" },
                    name: "requestWelcomeDialog",
                    type: "event",
                    value: "token",
                })
                .subscribe(
                    (id) => console.log(`Posted activity, assigned ID ${id}`),
                    (error) => console.log(`Error posting activity ${error}`)
                );
        });
    }
}
