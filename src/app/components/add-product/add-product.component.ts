import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productFormGroup! : FormGroup;
  submitted : boolean = false;
  constructor(private productService : ProductsService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.productFormGroup = this.formBuilder.group(
      {
        name:['', Validators.required],
        price: [0, Validators.required ],
        quantity: [0, Validators.required],
        isSelected: [true, Validators.required],
        isAvailable: [true, Validators.required]
      }
    )
  }

  onSubmit() {
    this.submitted = true;
    if(this.productFormGroup.invalid) return;
    this.productService.createProduct(this.productFormGroup.value).subscribe(
      (product) =>{
        alert("Product is created")
      }
    );
    this.route.navigateByUrl("products");

  }
}
