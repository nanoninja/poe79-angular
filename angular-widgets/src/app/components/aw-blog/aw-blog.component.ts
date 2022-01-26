import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import { BlogArticleComponent } from '../aw-blog-article/blog-article.component';
import { AwBlogArticleModel } from '../../models/aw-blog-article.model';

@Component({
    selector: 'aw-blog',
    templateUrl: './aw-blog.component.html',
    styleUrls: ['./aw-blog.component.scss']
})
export class AwBlogComponent implements OnInit {

    @ViewChildren(BlogArticleComponent)
    articleList!: QueryList<BlogArticleComponent>;
    articles: AwBlogArticleModel[] = [
        {
            title: 'Title 1',
            text: 'Text content 1',
        }
    ];

    constructor() { }

    ngOnInit(): void { }

    add(article: AwBlogArticleModel): void {
        let a = Object.assign({}, article);
        this.articles.push(a);
    }

    expandAll(): void {
        this.articleList.forEach((a: BlogArticleComponent) => a.open());
    }

    collapseAll(): void {
        this.articleList.forEach((a: BlogArticleComponent) => a.close());
    }
}
