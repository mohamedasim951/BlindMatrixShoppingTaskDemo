import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';
import { Cart } from '../Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((res) => {
      debugger;
      let pid = res.get('ProductId');
      if (pid) {
        this.ProductId = Number(pid);
        if (this.commonService.getProjectsList().length > 0) {
          this.commonService.Products.next({
            Products: this.commonService.getProjectsList(),
          });
          this.commonService.Products.subscribe((x: any) => {
            if (x) {
              this.ProductDetails = x.Products.filter(
                (x) => x.ProductId == this.ProductId
              )[0];
            }
          });
        }
      }
    });
  }

  ProductDetails: any;
  ProductId: number;

  addToCart(data: Cart) {
    debugger;
    this.commonService.addtoCart(data);
    this.router.navigate(['/cartlist']);
  }
  gobacktoList() {
    this.router.navigate(['/product']);
  }
}
