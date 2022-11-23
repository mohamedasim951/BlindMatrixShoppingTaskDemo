import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Cart, Product } from './Product';

@Injectable()
export class CommonService {
  constructor(private router: Router) {}
  LoginStatus: string = 'false';

  Products: BehaviorSubject<{ Products: any[] }> = new BehaviorSubject<{
    Products: any[];
  }>({ Products: [] });
  Cart: BehaviorSubject<{ Cart: any[] }> = new BehaviorSubject<{
    Cart: any[];
  }>({ Cart: [] });

  CartList: Product[] = [];
  ProductsList: Product[] = [
    {
      ProductId: 1,
      Name: 'IQ 6 (64GB) - Blue',
      Price: 49900,
      ImageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39vEThCKMcKKPI_VfZRD1J-irJ175jGlJnw&usqp=CAU',
      Point1: '6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display',
      Point2: 'Water and dust resistant (2 meters for up to 30 minutes, IP68)',
    },
  ];

  getProjectsList() {
    let arr = [];
    let data = localStorage.getItem('Products');
    if (data) {
      arr = JSON.parse(data);
    } else {
      let pl = JSON.stringify(this.ProductsList);
      localStorage.setItem('Products', pl);
      arr = this.ProductsList;
    }
    return arr;
  }

  saveProduct(arr: any[]) {
    if (arr.length > 0) {
      let data = JSON.stringify(arr);
      localStorage.setItem('Products', data);
      this.Products.next({ Products: arr });
    }
  }

  deleteProduct(arrindex: number) {
    if (arrindex) {
      let arr = this.getProjectsList();
      arr.splice(arrindex, 1);
      let data = JSON.stringify(arr);
      localStorage.setItem('Products', data);
      this.Products.next({ Products: arr });
    }
  }
  getCartList() {
    let arr = [];
    let data = localStorage.getItem('Cart');
    if (data) {
      arr = JSON.parse(data);
    }
    return arr;
  }
  addtoCart(obj: Cart) {
    debugger;
    if (obj) {
      let arr = this.getCartList();
      let arrayindex = this.getCartList().findIndex(
        (x) => x.ProductId == obj.ProductId
      );
      if (arrayindex > -1) {
        arr[arrayindex].Count = arr[arrayindex].Count + 1;
      } else {
        obj.Count = 1;
        arr.push(obj);
      }
      let data = JSON.stringify(arr);
      localStorage.setItem('Cart', data);
      this.Cart.next({ Cart: arr });
    }
  }

  saveCartList(arr: Cart[]) {
    debugger;
    // if (arr.length > 0) {
    let data = JSON.stringify(arr);
    localStorage.setItem('Cart', data);
    this.Cart.next({ Cart: arr });
    // }
  }

  cartcountandprice() {
    let arr = this.getCartList();
    let totalamount: number = 0;
    let totalitem: number = 0;

    arr.map((x) => {
      totalamount += x.Count * x.Price;
      totalitem += x.Count;
    });
    return {
      TotalItem: totalitem,
      TotalAmount: totalamount,
    };
  }

  proceedToBuy() {
    confirm('Are You Sure To Check Out');
    let arr = [];
    let data = JSON.stringify(arr);
    localStorage.setItem('Cart', data);
    this.Cart.next({ Cart: arr });
    this.router.navigate(['/product']);
    alert('Your Orders Will be Delivered Soon');
  }
}
