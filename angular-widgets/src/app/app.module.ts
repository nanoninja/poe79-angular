import { AwTabsModule } from './lib/aw-tabs/aw-tabs.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AwCarouselModule } from './lib/aw-carousel/aw-carousel.module';
import { AwTagsModule } from './lib/aw-tags/aw-tags.module';
import { AppComponent } from './app.component';
import { AwBlogComponent } from './components/aw-blog/aw-blog.component';
import { AwBlogFormComponent } from './components/aw-blog-form/aw-blog-form.component';
import { BlogArticleComponent } from './components/aw-blog-article/blog-article.component';
import { CardComponent } from './components/aw-card/aw-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AwBlogComponent,
    AwBlogFormComponent,
    BlogArticleComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AwTagsModule,
    AwTabsModule,
    AwCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
