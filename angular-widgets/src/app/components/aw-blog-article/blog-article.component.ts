import { Component, Input, OnInit } from '@angular/core';

import { AwBlogArticleModel } from '../../models/aw-blog-article.model';
import { fadeIn, fadeOut } from './../../lib/aw-core/aw-animations';

@Component({
    selector: 'aw-blog-article',
    templateUrl: './blog-article.component.html',
    styleUrls: ['./blog-article.component.scss'],
    animations: [fadeIn, fadeOut]
})
export class BlogArticleComponent implements OnInit {

    @Input() article!: AwBlogArticleModel;
    @Input() state: boolean = true;

    constructor() { }

    ngOnInit(): void { }

    toggle(): void {
        this.state = !this.state;
    }

    open(): void {
        this.state = true;
    }

    close(): void {
        this.state = false;
    }

}
