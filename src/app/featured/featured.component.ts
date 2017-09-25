import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})

export class FeaturedComponent {
  posts: Post[] = [
    new Post("CNN Breaking News", "CNN", "5 living former US Presidents expand their hurricane relief effort to include Puerto Rico and US Virgin Islands.", "https://pbs.twimg.com/media/DKlVGXLVYAAnUya.jpg", "news", 1),
    new Post("Halo Game", "Halo", "Ten years ago, the Master Chief inspired us to Believe.  Thank you for all the wonderful memories, Halo 3!", "https://pbs.twimg.com/media/DKlKudUXkAAO-ne.jpg", "entertainment", 2),
    new Post("The Big Bang Theory", "ABC", "Be ready for the big night on #BigBangTheory, anywhere you are! Here's how to watch the premiere across devices.", "https://pbs.twimg.com/media/DKjB9eHVAAAGzwU.jpg", "entertainment", 3)
  ];
}
