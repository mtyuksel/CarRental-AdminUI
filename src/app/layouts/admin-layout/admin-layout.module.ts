import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrandAddComponent } from "src/app/pages/brand-add/brand-add.component";
import { CarAddComponent } from "src/app/pages/car-add/car-add.component";
import { CarDetailComponent } from "src/app/pages/car-detail/car-detail.component";
import { CarEditComponent } from "src/app/pages/car-edit/car-edit.component";
import { BrandsComponent } from "src/app/pages/brands/brands.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    BrandAddComponent,
    CarAddComponent,
    CarDetailComponent,
    CarEditComponent,
    BrandsComponent,
    BrandsComponent,
    CarDetailComponent,
    CarEditComponent
    // RtlComponent
  ],
  exports: [FormsModule, ReactiveFormsModule]
})
export class AdminLayoutModule {}
