import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-product-list-child',
  templateUrl: './product-list-child.component.html',
  styleUrls: ['./product-list-child.component.css'],
})
export class ProductListChildComponent implements OnInit {
  constructor(public fb: FormBuilder, public CommonService: CommonService) {}

  ngOnInit() {}

  @Input() IsEditDelete: boolean = true;
  @Input() IsCreate: boolean = true;
  @Input() IsDisplayModal: boolean = false;
  @Input() ProductId: number = 0;

  ProductForm: FormGroup = this.fb.group({
    ProductId: [null],
    Name: [null, [Validators.required]],
    Price: [null, [Validators.required]],
    ImageUrl: [null, [Validators.required]],
    Point1: [null, [Validators.required]],
    Point2: [null],
  });

  SubmitForm() {
    debugger;
    let values = this.ProductForm.value;
    if (!this.IsCreate) {
      if (this.ProductId) {
        let ProductArrayIndex = this.CommonService.getProjectsList().findIndex(
          (x) => x.ProductId == this.ProductId
        );
        if (ProductArrayIndex > -1) {
          let arr = this.CommonService.getProjectsList();
          arr.splice(ProductArrayIndex, 1, values);
          this.CommonService.saveProduct(arr);
        }
      }
    } else {
      let ProductArray = this.CommonService.getProjectsList();
      if (ProductArray.length > 0) {
        values.ProductId = ProductArray.length + 1;
      } else {
        values.ProductId = 1;
      }
      if (values) {
        let arr = ProductArray;
        arr.push(values);
        this.CommonService.saveProduct(arr);
      }
      console.log(values);
    }
    this.closeForm();
  }

  seteditformData() {
    debugger;
    let ProductObj = this.CommonService.getProjectsList().filter(
      (x) => x.ProductId == this.ProductId
    )[0];
    this.ProductForm.patchValue(ProductObj);
    this.IsDisplayModal = true;
  }
  deleteproduct() {
    confirm('Are You Sure to Delete!');
    let ProductArrayIndex = this.CommonService.getProjectsList().findIndex(
      (x) => x.ProductId == this.ProductId
    );
    this.CommonService.deleteProduct(ProductArrayIndex);
  }
  closeForm() {
    this.IsDisplayModal = false;
    this.ProductForm.reset();
    // this.ProductId = null;
  }
}
