import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';
import { Cart, Product } from '../Product';

@Component({
  selector: 'app-product-list-parent',
  templateUrl: './product-list-parent.component.html',
  styleUrls: ['./product-list-parent.component.css'],
})
export class ProductListParentComponent implements OnInit {
  constructor(public commonService: CommonService, public router: Router) {}

  ngOnInit(): void {
    if (this.commonService.getProjectsList().length > 0) {
      this.commonService.Products.next({
        Products: this.commonService.getProjectsList(),
      });
      this.commonService.Products.subscribe((x: any) => {
        this.Products = x.Products;
      });
    }
  }

  Products: Product[] = [];

  addToCart(data: Cart) {
    debugger;
    this.commonService.addtoCart(data);
    this.router.navigate(['/cartlist']);
  }
  gotoDetails(pid) {
    this.router.navigate(['/productdetails',pid]);
  }
}
