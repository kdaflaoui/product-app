import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './components/not-found/not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { HeaderProductComponent } from './components/products/header-product/header-product.component';
import { ItemProductComponent } from './components/products/list-product/item-product/item-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';

const appRoutes : Routes = [
  {path: 'products', component: ProductsComponent },
  {path: 'add-product', component: AddProductComponent },
  {path: 'edit-product/:id', component: EditProductComponent },
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo:'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    HomeComponent,
    NotFoundComponent,
    AddProductComponent,
    EditProductComponent,
    HeaderProductComponent,
    ItemProductComponent,
    ListProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
