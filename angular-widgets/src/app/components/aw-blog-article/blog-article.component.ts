import { trigger, style, state, animate, transition, query } from '@angular/animations';
import { AwBlogArticleModel } from './../models/aw-blog-article.model';
import { Component, Input, OnInit } from '@angular/core';

export const toggleBox = trigger('toggleBox', [
    state('open', style({ opacity: 1 })),
    state('close', style({ opacity: 0 })),
    transition('* => open', animate(1000)),
    transition('open=> close', animate(1000))
])

@Component({
    selector: 'aw-blog-article',
    templateUrl: './blog-article.component.html',
    styleUrls: ['./blog-article.component.scss'],
    animations: [toggleBox]
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
