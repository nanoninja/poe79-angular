import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from './../../../services/product.service';
import { ProductModel } from './../../../models/product.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(
    public authService: AuthService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getAll()
      .subscribe(products => this.products = products);
  }

  show(product: ProductModel): void {
    
  }
}
