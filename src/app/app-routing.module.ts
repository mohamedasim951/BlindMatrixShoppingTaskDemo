import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListParentComponent } from './product-list-parent/product-list-parent.component';

const routes: Routes = [
  { path: 'product', component: ProductListParentComponent },
  { path: 'productdetails/:ProductId', component: ProductDetailsComponent },
  { path: 'cartlist', component: CartComponent },
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
