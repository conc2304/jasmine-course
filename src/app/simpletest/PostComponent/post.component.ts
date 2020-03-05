import { Component } from '@angular/core';

export interface Post {
  title: string,
  description: string,
  totalLikes: number,
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  totalLikes: number = 4;

  // ngOnInit(): void {

  //   this.totalLikes= 4;
  // }

  like() {
    this.totalLikes++;
  }

  dislike() {
    if (this.totalLikes) this.totalLikes--;
  }
}
