import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {SkeletonComponent} from "./pages/skeletonPage/skeleton/skeleton.component";
import {StatsComponent} from "./pages/posPage/stats/stats.component";
import {EnterprisePageComponent} from "./pages/enterprisePage/enterprise-page/enterprise-page.component";
import {NewEnterprisePageComponent} from "./pages/enterprisePage/new-enterprise-page/new-enterprise-page.component";
import {PosListComponent} from "./pages/posPage/pos-list/pos-list.component";
import {NewPosPageComponent} from "./pages/posPage/new-pos-page/new-pos-page.component";
import {UsersPageComponent} from "./pages/userPage/users-page/users-page.component";
import {NewUserPageComponent} from "./pages/userPage/new-user-page/new-user-page.component";
import {DevisePageComponent} from "./pages/devisePage/devise-page/devise-page.component";
import {NewDevisePageComponent} from "./pages/devisePage/new-devise-page/new-devise-page.component";
import {CategoryPageComponent} from "./pages/categoryPage/category-page/category-page.component";
import {NewCategoryPageComponent} from "./pages/categoryPage/new-category-page/new-category-page.component";
import {ProductPageComponent} from "./pages/productPage/product-page/product-page.component";
import {NewProductPageComponent} from "./pages/productPage/new-product-page/new-product-page.component";
import {ApplicationGuardService} from "./services/guard/application-guard.service";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'dashboard',
  //   component: SkeletonComponent
  // },
  {
    path:'',
    component: SkeletonComponent,
    canActivate: [ApplicationGuardService],
    children: [
      {
        path:'stats',
        component: StatsComponent
      },
      {
        path:'enterprises',
        component: EnterprisePageComponent
      },
      {
        path:'new-enterprise-page',
        component: NewEnterprisePageComponent
      },
      {
        path:'pos',
        component: PosListComponent
      },
      {
        path:'new-pos-page',
        component: NewPosPageComponent
      },
      {
        path:'users',
        component: UsersPageComponent
      },
      {
        path:'new-user-page',
        component: NewUserPageComponent
      },
      {
        path:'devises',
        component: DevisePageComponent
      },
      {
        path:'new-devise-page',
        component: NewDevisePageComponent
      },
      {
        path: 'categories',
        component: CategoryPageComponent
      },
      {
        path: 'new-category-page',
        component: NewCategoryPageComponent
      },
      {
        path: 'products',
        component: ProductPageComponent
      },
      {
        path: 'new-product-page',
        component: NewProductPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
