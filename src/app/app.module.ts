import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { CarsComponent } from './pages/cars/cars.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { CarDetailComponent } from './pages/car-detail/car-detail.component';
import { CarEditComponent } from './pages/car-edit/car-edit.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, CarsComponent, ColorsComponent, BrandsComponent, LocationsComponent, CarDetailComponent, CarEditComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
