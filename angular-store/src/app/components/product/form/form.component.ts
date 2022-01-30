import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductService } from './../../../services/product.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    formGroup!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private productService: ProductService,
        private router: Router,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.formGroup = this.fb.group({
            name: ['Title of product', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(255),
            ]],
            description: ['Description of product', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(500)
            ]],
            price: [29.99],
            active: [false]
        });
    }

    onSubmit(): void {
        console.log(this.formGroup.value);
        if (this.formGroup.invalid) {
            return;
        }

        this.productService.create(this.formGroup.value)
            .subscribe(() => this.router.navigate(['/products']));
    }

    onCancel(): void {
        this.location.back();
    }
}
