import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch:"full" },
  { path: 'home', component: HomeComponent },
  // { path: 'search/:searchTerm', component: HomeComponent },
  // { path: 'tag/:tag', component: HomeComponent },
  // {path:'food/:id', component:FoodPageComponent},
  // {path:'cart-page', component: CartPageComponent},
  // {path:'login', component: LoginPageComponent},
  // {path:'register', component: RegisterPageComponent},
  // {path:'checkout', component: CheckoutPageComponent, canActivate:[AuthGuard]},
  // {path:'payment', component: PaymentPageComponent, canActivate:[AuthGuard]},
  // {path:'track/:orderId', component: OrderTrackPageComponent, canActivate:[AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
