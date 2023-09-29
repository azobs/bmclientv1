import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule} from "@angular/forms";
import { TestComponent } from './test/test.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./interceptor/http-interceptor.service";
import { SkeletonComponent } from './pages/skeletonPage/skeleton/skeleton.component';
import { MenuComponent } from './pages/skeletonPage/menu/menu.component';
import { BadgeComponent } from './pages/skeletonPage/badge/badge.component';
import { SearchbarComponent } from './pages/skeletonPage/searchbar/searchbar.component';
import { BreadcrumbComponent } from './pages/skeletonPage/breadcrumb/breadcrumb.component';
import { ActionComponent } from './pages/skeletonPage/action/action.component';
import { StatsComponent } from './pages/posPage/stats/stats.component';
import { EnterprisePageComponent } from './pages/enterprisePage/enterprise-page/enterprise-page.component';
import { EnterpriseDetailsComponent } from './pages/enterprisePage/enterprise-details/enterprise-details.component';
import { EnterprisePaginationComponent } from './pages/enterprisePage/enterprise-pagination/enterprise-pagination.component';
import { EnterpriseActionComponent } from './pages/enterprisePage/enterprise-action/enterprise-action.component';
import { NewEnterprisePageComponent } from './pages/enterprisePage/new-enterprise-page/new-enterprise-page.component';
import { PosListComponent } from './pages/posPage/pos-list/pos-list.component';
import { PosActionComponent } from './pages/posPage/pos-action/pos-action.component';
import { PosPaginationComponent } from './pages/posPage/pos-pagination/pos-pagination.component';
import { PosDetailsComponent } from './pages/posPage/pos-details/pos-details.component';
import { NewPosPageComponent } from './pages/posPage/new-pos-page/new-pos-page.component';
import { UserDetailsComponent } from './pages/userPage/user-details/user-details.component';
import { UsersPageComponent } from './pages/userPage/users-page/users-page.component';
import { UsersActionComponent } from './pages/userPage/users-action/users-action.component';
import { UsersPaginationComponent } from './pages/userPage/users-pagination/users-pagination.component';
import { NewUserPageComponent } from './pages/userPage/new-user-page/new-user-page.component';
import { NewDevisePageComponent } from './pages/devisePage/new-devise-page/new-devise-page.component';
import { DevisePageComponent } from './pages/devisePage/devise-page/devise-page.component';
import { DeviseActionComponent } from './pages/devisePage/devise-action/devise-action.component';
import { DevisePaginationComponent } from './pages/devisePage/devise-pagination/devise-pagination.component';
import { DeviseDetailsComponent } from './pages/devisePage/devise-details/devise-details.component';
import { CategoryPageComponent } from './pages/categoryPage/category-page/category-page.component';
import { CategoryActionComponent } from './pages/categoryPage/category-action/category-action.component';
import { CategoryPaginationComponent } from './pages/categoryPage/category-pagination/category-pagination.component';
import { CategoryDetailsComponent } from './pages/categoryPage/category-details/category-details.component';
import { NewCategoryPageComponent } from './pages/categoryPage/new-category-page/new-category-page.component';
import { ProductPageComponent } from './pages/productPage/product-page/product-page.component';
import { ProductActionComponent } from './pages/productPage/product-action/product-action.component';
import { ProductPaginationComponent } from './pages/productPage/product-pagination/product-pagination.component';
import { ProductDetailsComponent } from './pages/productPage/product-details/product-details.component';
import { NewProductPageComponent } from './pages/productPage/new-product-page/new-product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    SkeletonComponent,
    MenuComponent,
    BadgeComponent,
    SearchbarComponent,
    BreadcrumbComponent,
    ActionComponent,
    StatsComponent,
    EnterprisePageComponent,
    EnterpriseDetailsComponent,
    EnterprisePaginationComponent,
    EnterpriseActionComponent,
    NewEnterprisePageComponent,
    PosListComponent,
    PosActionComponent,
    PosPaginationComponent,
    PosDetailsComponent,
    NewPosPageComponent,
    UserDetailsComponent,
    UsersPageComponent,
    UsersActionComponent,
    UsersPaginationComponent,
    NewUserPageComponent,
    NewDevisePageComponent,
    DevisePageComponent,
    DeviseActionComponent,
    DevisePaginationComponent,
    DeviseDetailsComponent,
    CategoryPageComponent,
    CategoryActionComponent,
    CategoryPaginationComponent,
    CategoryDetailsComponent,
    NewCategoryPageComponent,
    ProductPageComponent,
    ProductActionComponent,
    ProductPaginationComponent,
    ProductDetailsComponent,
    NewProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
