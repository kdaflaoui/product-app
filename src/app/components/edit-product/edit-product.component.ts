import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/product.model";
import {ProductsService} from "../../services/products.service";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  productId! : number;
  editProductFormGroup! : FormGroup;
  submitted : boolean = false;

  constructor(private productService : ProductsService,
              private formBuilder: FormBuilder,
              private activateRoute : ActivatedRoute,
              private route : Router) { }

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['id'];
    this.productService.getObservableOneProducts(this.productId).subscribe(
      (product) =>{
        this.editProductFormGroup = this.formBuilder.group(
          {
            id:[product.id, Validators.required],
            name:[product.name, Validators.required],
            price: [product.price, Validators.required ],
            quantity: [product.quantity, Validators.required],
            isSelected: [product.isSelected, Validators.required],
            isAvailable: [product.isAvailable, Validators.required]
          }
        );
      }
    )
  }

  onUpdate() {
    this.submitted = true;
    if(this.editProductFormGroup.invalid) return;
    this.productService.updateProduct(this.editProductFormGroup.value).subscribe(
      (product) =>{
        alert("Product is updated")
      }
    );
    this.route.navigateByUrl("products");
  }
}
