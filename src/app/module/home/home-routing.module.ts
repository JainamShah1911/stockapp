import { HomepageComponent } from "./component/homepage/homepage.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationComponent } from "./component/station/station.component";

const routes: Routes = [
  {
    path: '', component: HomepageComponent,
    children: [
      { path: 'station', component: StationComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
