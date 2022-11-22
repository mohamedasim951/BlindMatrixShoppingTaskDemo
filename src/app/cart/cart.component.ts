import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';
import { Cart, Product } from '../Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(public commonService: CommonService, public router: Router) {}

  ngOnInit(): void {
    if (this.commonService.getProjectsList().length > 0) {
      this.commonService.Cart.next({
        Cart: this.commonService.getCartList(),
      });
      this.commonService.Cart.subscribe((x: any) => {
        this.Cart = x.Cart;
      });
    }
  }

  Cart: Cart[] = [];

  increaseandDecreaseCount(increase: boolean, ProductId) {
    debugger;
    let arr = this.commonService.getCartList();
    if (increase) {
      let arrindex = arr.findIndex((x) => x.ProductId == ProductId);
      if (arrindex > -1) {
        arr[arrindex].Count = arr[arrindex].Count + 1;
      }
    } else {
      let arrindex = arr.findIndex((x) => x.ProductId == ProductId);
      if (arrindex > -1) {
        if (arr[arrindex].Count > 1) {
          arr[arrindex].Count = arr[arrindex].Count - 1;
        } else {
          arr.splice(arrindex, 1);
        }
      }
    }
    this.commonService.saveCartList(arr);
  }

  gotoshop() {
    this.router.navigate(['/product']);
  }
  gotoDetails(pid) {
    this.router.navigate(['/productdetails',pid]);
  }
}
