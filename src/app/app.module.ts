import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CommonService } from './common.service';
import { AppRoutingModule } from './app-routing.module';
import { ProductListChildComponent } from './product-list-child/product-list-child.component';
import { ProductListParentComponent } from './product-list-parent/product-list-parent.component';
import { ContentComponent } from './content/content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListChildComponent,
    ProductListParentComponent,
    ContentComponent,
    PageNotFoundComponent,
    CartComponent,
    ProductDetailsComponent,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
