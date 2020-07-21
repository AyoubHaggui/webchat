import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
    { path: "", component: NotFoundComponent },
    { path: "reclamations",component:ReclamationListComponent},
    { path: "users",component:UserListComponent},
    { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
