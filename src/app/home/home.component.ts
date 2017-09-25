import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {
  selectedPost = null;
  posts: Post [];
  constructor(private router: Router, private postService: PostService) {}

  ngOnInit(){
    this.posts = this.postService.getPosts();
  }

  addPost(newPostFromChild: Post){
    this.posts.push(newPostFromChild);
  }

  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  };

  editPost(clickedPost) {
    this.selectedPost = clickedPost;
  }

  finishedEditing() {
    this.selectedPost = null;
  }
}
