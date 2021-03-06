import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { CarsComponent } from "src/app/pages/cars/cars.component";
import { BrandsComponent } from "src/app/pages/brands/brands.component";
import { BrandAddComponent } from "src/app/components/brand-add/brand-add.component";
import { AdminLayoutComponent } from "./admin-layout.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  {
    path: 'admin',
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "icons", component: IconsComponent },
      { path: "maps", component: MapComponent },
      { path: "notifications", component: NotificationsComponent },
      { path: "user", component: UserComponent },
      { path: "tables", component: TablesComponent },
      { path: "typography", component: TypographyComponent },
      { path: "cars", component: CarsComponent },
      { path: "brands", component: BrandsComponent },
      { path: "brands/add", component: BrandAddComponent }
    ]
}


 
  // { path: "rtl", component: RtlComponent }
];
