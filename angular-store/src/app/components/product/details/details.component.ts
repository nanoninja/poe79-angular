import { AuthService } from 'src/app/services/auth.service';
import { ProductModel } from './../../../models/product.model';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  product!: ProductModel;
  title: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];

    this.productService.findOne(id)
      .subscribe((product: ProductModel) => this.product = product);
  }

  onDelete(product: ProductModel): void {
    this.productService.deleteOne(product.id!)
      .subscribe(() => this.router.navigate(['/products']));
  }

  onCancel(): void {
    this.location.back();
  }

}
