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
import { BrandAddComponent } from "src/app/components/brand-add/brand-add.component";
import { CarAddComponent } from "src/app/components/car-add/car-add.component";
import { CarDetailComponent } from "src/app/components/car-detail/car-detail.component";
import { CarEditComponent } from "src/app/components/car-edit/car-edit.component";
import { BrandsComponent } from "src/app/pages/brands/brands.component";
import { CarsComponent } from "src/app/pages/cars/cars.component";
import { CarListComponent } from "src/app/components/car-list/car-list.component";
import { BrandListComponent } from "src/app/components/brand-list/brand-list.component";

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
    BrandsComponent,
    BrandAddComponent,
    BrandListComponent,
    CarAddComponent,
    CarListComponent,
    CarDetailComponent,
    CarEditComponent,
    CarsComponent
    // RtlComponent
  ],
  exports: [FormsModule, ReactiveFormsModule]
})
export class AdminLayoutModule {}
