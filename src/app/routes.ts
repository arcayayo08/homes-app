import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: HomeComponent,
        title: 'List Page'
    },
    {
        path: 'details/:index',
        component: DetailsComponent,
        title: 'Details Page'
    }
];

export default routeConfig;