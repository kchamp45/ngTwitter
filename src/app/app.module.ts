import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FeaturedComponent } from './featured/featured.component';
import { SportsComponent } from './sports/sports.component';
import { routing } from './app.routing';
import { TypePipe } from './type.pipe';
import { HomeComponent } from './home/home.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedComponent,
    SportsComponent,
    TypePipe,
    HomeComponent,
    NewPostComponent,
    PostDetailComponent,
    EditPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
