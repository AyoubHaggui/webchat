import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { WebChatComponent } from "./web-chat/web-chat.component";

const routes: Routes = [
    { path: "", component: NotFoundComponent },
    { path: ":userId", component: WebChatComponent },
    { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
